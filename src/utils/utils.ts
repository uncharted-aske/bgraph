import { IBGraph } from "..";
import { IVertex, IEdge } from "../graph/graph";
import { GremlinState, Gremlin } from "../query/query";

export interface IUtils {
  cloneGremlinState: (state: GremlinState) => GremlinState,
  makeGremlin: (vertex: IVertex, state: GremlinState) => Gremlin,
  gotoVertex: (gremlin: Gremlin, vertex: IVertex)=> Gremlin,
  filterEdges: (filter: string | string[])=> (edge: IEdge) => boolean,
  objectFilter: (thing: any, filter: Record<string, any>) => boolean,
  error: (msg: string, err?: Error) => false,
  extend: (list: any, defaults: any) => any,
  remove: (list: any, item: any) => any,
}

export function hydrate(bgraph: IBGraph): void {
  bgraph.cloneGremlinState = function(state: GremlinState) {
    const newState: Partial<GremlinState> = {};
    if (state?.as) {
      newState.as = state.as;
    }
    if (state?.path) {
      newState.path = state.path; // Point new state to head of path
    }
    if (state?.taken) {
      newState.taken = state.taken;
    }
    if (state?.gotoStack) {
      newState.gotoStack = state.gotoStack;
    }
    return newState as GremlinState;
  };

  bgraph.makeGremlin = function(vertex: IVertex, state: GremlinState): Gremlin {
    return {vertex, state: state || {} };
  };

  bgraph.gotoVertex = function(gremlin: Gremlin, vertex: IVertex): Gremlin {
    const state = bgraph.cloneGremlinState(gremlin.state);
    if (state.path) {
      // Add current vertex to Gremlin's path
      const newPath = {
        vertex: gremlin.vertex,
        parent: state.path,
      };
      state.path = newPath;
    } else {
      state.path = {
        vertex: gremlin.vertex,
      };
    }
    return bgraph.makeGremlin(vertex, state); // Clone gremlin
  };

  bgraph.filterEdges = function(filter: string | string[]): (edge: IEdge) => boolean {
    return function(edge: IEdge): boolean {
      if(!filter) {
        return true;
      }
      if(typeof filter === 'string') {
        // Match edge label
        return edge._label === filter;
      }
      if(Array.isArray(filter)){
        // Check if edge label within filters
        return !!~filter.indexOf(edge._label);
      }
      // Match edge to object property values
      return bgraph.objectFilter(edge, filter);
    };
  };

  bgraph.objectFilter = function(thing: any, filter: Record<string, any>): boolean {
    for(const key in filter) {
      if(thing[key] !== filter[key]) {
        return false;
      }
    }
    return true;
  };

  // TODO: Rethink error return value
  bgraph.error = function(msg: string, err?: Error): false {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(msg, err);
    } else {
      // eslint-disable-next-line no-console
      console.log(msg);
    }
    return false;
  };

  bgraph.extend = function(list: any, defaults: any): any {
    return Object.keys(defaults).reduce(function(acc, key) {
      if(typeof list[key] !== 'undefined') return acc;
      acc[key] = defaults[key];
      return acc;
    }, list);
  };

  bgraph.remove = function(list: any, item: any): any {
    return list.splice(list.indexOf(item), 1);
  };
}
