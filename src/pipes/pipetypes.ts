import { IGraph, IVertex } from "../graph/graph";
import { IQuery, Gremlin, State, MaybeGremlin } from "../query/query";
import { IBGraph } from "..";

export type PipeResult = Gremlin | 'done' | 'pull' | false;

export type PipeFunction = (
  graph: IGraph,
  args: any[],
  gremlin: MaybeGremlin,
  state?: State,
  [string]?: any,
) => PipeResult;

// TODO: List all available pipetype strings
export type PipeTypes = string;
export type DirectionTypes = 'in' | 'out' | 'both';

export interface IPipe {
  Pipetypes: Map<PipeTypes, PipeFunction>,
  addPipetype: (name: PipeTypes, fun: PipeFunction | (() => void)) => void,
  getPipetype: (name: PipeTypes) => PipeFunction,
  fauxPipetype: (graph: IGraph, args: any[], maybe_gremlin: MaybeGremlin) => MaybeGremlin,
  simpleTraversal: (dir: DirectionTypes)
    => (graph: IGraph, args: any[], gremlin: Gremlin, state: State)
    => PipeResult,
}

export function hydrate(bgraph: IBGraph): void {
  // Extend query object with new pipetype method
  bgraph.addPipetype = function(name: PipeTypes, fun: PipeFunction): void {
    bgraph.Pipetypes[name] = fun;
    bgraph.Q[name] = function(this: IQuery): IQuery {
      // Capture the pipetype name and arguments passed to function
      // ex. name(1,2,3)
      // eslint-disable-next-line prefer-rest-params
      return this.add(name, [].slice.apply(arguments)); // Type coerce IArguments to any[]
    };
  };

  bgraph.getPipetype = function(name: PipeTypes): PipeFunction {
    const pipetype: PipeFunction = bgraph.Pipetypes[name];

    if(!pipetype) {
      bgraph.error('Unrecognized pipe type: ' + name);
    }

    return pipetype || bgraph.fauxPipetype;
  };

  bgraph.fauxPipetype = function(graph: IGraph, args: any[], maybe_gremlin: MaybeGremlin): MaybeGremlin {
    // Used when unable to find user specified pipetype to keep pipeline going
    return maybe_gremlin || 'pull';
  };

  // Built-in Pipetypes TODO: Move to own directory

  bgraph.addPipetype('repeat', function(graph: IGraph, args: any[], maybe_gremlin: MaybeGremlin): MaybeGremlin {
    // Faux pipetype used to pass type error checking. Removed in transformer step
    return maybe_gremlin || 'pull';
  });

  bgraph.addPipetype('start', function(graph: IGraph, args: any[], maybe_gremlin: MaybeGremlin): MaybeGremlin {
    // Faux pipetype used to pass type error checking. Removed in transformer step
    return maybe_gremlin || 'pull';
  });

  bgraph.addPipetype('suspend', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    let shouldSuspendGremlin = true;

    if(!gremlin && (!state.gremlins || !state.gremlins.length)) {
      // Initialize query, request new gremlin from predecessor
      return 'pull';
    }

    if(!state.gremlins || !state.gremlins.length) {
      if((typeof args[0] == 'object' && !bgraph.objectFilter(gremlin.vertex, args[0])) ||
         (typeof args[0] == 'function' && !args[0](gremlin.vertex, gremlin))) {
        shouldSuspendGremlin = false;
      }

      if (shouldSuspendGremlin) {
        // Initialize state
        const suspendedGremlinState = bgraph.cloneGremlinState(gremlin.state);
        suspendedGremlinState.isSuspended = true;
        const suspendedGremlin = bgraph.makeGremlin(gremlin.vertex, suspendedGremlinState);
        state.gremlins = [gremlin, suspendedGremlin];
      } else {
        state.gremlins = [gremlin];
      }
    }

    if(!state.gremlins.length) {
      // No more suspended gremlins, request new gremlin from predecessor
      return 'pull';
    }

    return state.gremlins.pop();
  });

  bgraph.addPipetype('unsuspend', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    if(!gremlin) return 'pull'; // Initialize query
    if (gremlin && gremlin.state.isSuspended) gremlin.state.isSuspended = false; // Unsuspend Gremlin
    return gremlin;
  });

  bgraph.addPipetype('vertex', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State) {
    if(!state.vertices) {
      // Initialize vertices
      state.vertices = graph.findVertices(args);
    }
    if(!state.vertices.length) {
      // No vertices found/remaining
      return 'done';
    }

    // Create gremlin containing next vertex and state so far
    const vertex = state.vertices.pop();
    return bgraph.makeGremlin(vertex, gremlin.state);
  });

  bgraph.simpleTraversal = function(dir: DirectionTypes) {
    const find_method = dir == 'out' ? 'findOutEdges' : 'findInEdges';
    const edge_list   = dir == 'out' ? '_in' : '_out';

    return function(graph, args, gremlin, state): Gremlin | 'pull' {
      if(!gremlin && (!state.edges || !state.edges.length)) {
        // Initialize query, request new gremlin from predecessor
        return 'pull';
      }

      if (gremlin && gremlin.state.isSuspended) return gremlin; // Gremlin is suspended do not traverse

      if(!state.edges || !state.edges.length) {
        // Initialize state
        state.gremlin = gremlin;
        // Get matching edges
        if (typeof args[0] === 'function') {
          // User supplied edge filtering function
          state.edges = graph[find_method](gremlin.vertex)
                          .filter(args[0]);
        } else {
          // Wrap users string, list of strings in a filtering function
          state.edges = graph[find_method](gremlin.vertex)
                          .filter(bgraph.filterEdges(args[0]));
        }
      }

      if(!state.edges.length) {
        // No more edges, request new gremlin from predecessor
        return 'pull';
      }

      const vertex = state.edges.pop()[edge_list];
      return bgraph.gotoVertex(state.gremlin, vertex);
    };
  };

  bgraph.addPipetype('in',   bgraph.simpleTraversal('in'));
  bgraph.addPipetype('out',  bgraph.simpleTraversal('out'));
  // TODO: Implement pipetype that allows traversal through both inward/outward edges
  bgraph.addPipetype('both', bgraph.simpleTraversal('both'));

  bgraph.addPipetype('property', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    if(!gremlin) return 'pull'; // Initialize query, request gremlin from predecessor
    gremlin.result = gremlin.vertex[args[0]];
    return gremlin.result == null ? false : gremlin; // If no properties requested destroy gremlin
  });

  bgraph.addPipetype('unique', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    if(!gremlin) return 'pull'; // Initialize query
    if (gremlin && gremlin.state.isSuspended) return gremlin; // Gremlin is suspended do not traverse
    if(state[gremlin.vertex._id]) return 'pull'; // Gremlin seen, request new gremlin
    state[gremlin.vertex._id] = true; // Track seen gremlins by attached vertex
    return gremlin;
  });

  // TODO: Update args type to indicate first argument should be an object or function
  bgraph.addPipetype('filter', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    if(!gremlin) return 'pull'; // Initialize query
    if (gremlin && gremlin.state.isSuspended) return gremlin; // Gremlin is suspended do not traverse

    if(typeof args[0] == 'object') {
      // Request new gremlin if current gremlin filtered out
      return bgraph.objectFilter(gremlin.vertex, args[0])
          ? gremlin : 'pull';
    }

    if(typeof args[0] != 'function') {
      bgraph.error('Filter arg must be function or object: ' + args[0]);
      return gremlin; // Ignore filter command pass gremlin forward
    }

    if(!args[0](gremlin.vertex, gremlin)) {
      return 'pull'; // Gremlin filtered out, request new gremlin
    }
    // Gremlin passed filter pass gremlin forward
    return gremlin;
  });

  // TODO: Take could be used to return result batches so user can process asynchronously
  bgraph.addPipetype('take', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    state.taken = state.taken || 0; // Initialize state

    if(state.taken == args[0]) {
      // Returned requested number of results
      state.taken = 0;
      return 'done';
    }

    if(!gremlin) return 'pull'; // Initialize query
    state.taken++;
    return gremlin;
  });

  bgraph.addPipetype('as', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    if(!gremlin) return 'pull'; // Initialize query
    gremlin.state.as = gremlin.state.as || {} as unknown as Map<string, IVertex>; // TODO: Type bug initialize gremlin's 'as' state
    gremlin.state.as[args[0]] = gremlin.vertex; // Label vertex
    return gremlin;
  });

  bgraph.addPipetype('back', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    if(!gremlin) return 'pull'; // Initialize query
    return bgraph.gotoVertex(gremlin, gremlin.state.as[args[0]]);
  });

  bgraph.addPipetype('except', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    if(!gremlin) return 'pull'; // Initialize query
    if(gremlin.vertex == gremlin.state.as[args[0]]) return 'pull';
    return gremlin;
  });

  bgraph.addPipetype('merge', function(graph: IGraph, args: any[], gremlin: Gremlin, state: State): PipeResult {
    if(!state.vertices && !gremlin) return 'pull'; // Initialize query

    if(!state.vertices || !state.vertices.length) { // Initialize state
      const obj = (gremlin.state||{}).as || {};
      state.vertices = args.map(function(id) {return obj[id];}).filter(Boolean);
    }

    if(!state.vertices.length) return 'pull'; // Request next batch

    const vertex = state.vertices.pop();
    return bgraph.makeGremlin(vertex, gremlin.state);
  });
}
