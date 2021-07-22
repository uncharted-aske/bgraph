import { IGraph, IVertex, IVertexPath, IEdge } from "../graph/graph";
import { IBGraph } from "..";
import { PipeTypes, PipeResult, PipeFunction } from "../pipes/pipetypes";


export type Step = [
  PipeTypes, // Pipe name
  any, // Arguments to PipeFunction associated with pipe name
  ...never[], // Fixed length tuple
];

export interface GremlinState {
  as?: Map<string, IVertex>,
  path?: IVertexPath,
  isResult?: boolean,
  isSuspended?: boolean,
  taken?: number,
  goto?: number,
  gotoStack?: number[],
}

export interface Gremlin {
  vertex: IVertex,
  state: GremlinState,
  result?: any,
}

export type MaybeGremlin = PipeResult | false;

export interface State {
  vertices: IVertex[],
  edges: IEdge[],
  gremlin: Gremlin,
  taken: number,
  gremlins: Gremlin[],
}

export interface IQueryPrototype {
  run: (this: IQuery) => any[],
  add: (this: IQuery, pipetype: PipeTypes, args: any[]) => IQuery,
}

export interface IQuery extends IQueryPrototype {
  graph: IGraph,
  state: State[],       // State associated with each Step
  program: Step[],      // Steps to process
  gremlins: Gremlin[],  // Gremlin associated with each Step
}

export function prototype(bgraph: IBGraph): IQueryPrototype {
  const Q: Partial<IQueryPrototype> = {};

  // Virtual machine for running the query
  Q.run = function(this: IQuery): any[] {
    this.program = bgraph.transform(this.program); // Modify program instructions based on registered transformers

    const max = this.program.length - 1; // Last step in program
    let maybe_gremlin: MaybeGremlin = false;
    const results: Gremlin[] = []; // Result of query
    let done = -1;
    let pc = max;

    let step: Step;
    let state: State;
    let pipetype: PipeFunction;

    // driver loop
    while(done < max) {
      step = this.program[pc];
      state = (this.state[pc] = this.state[pc] || {} as State);
      pipetype = bgraph.getPipetype(step[0]);
      maybe_gremlin = pipetype(this.graph, step[1], maybe_gremlin, state, pc);

      if(maybe_gremlin === 'pull') { // 'pull' tells us the pipe wants further input
        maybe_gremlin = false;
        if(pc-1 > done) {
          pc--; // Move program counter to previous pipe
          continue;
        } else {
          done = pc; // Previous pipe is finished. Move program counter to last step
        }
      }

      if(maybe_gremlin === 'done') {
        // Pipe is finished
        maybe_gremlin = false;
        done = pc;
      }

      if (typeof maybe_gremlin === 'object' && maybe_gremlin.state.goto) {
        pc = maybe_gremlin.state.goto;
        maybe_gremlin.state.goto = undefined;
        continue;
      } else {
        pc++; // Move program counter to next pipe
      }

      if(pc > max) {
        if(maybe_gremlin) {
          // Handle Gremlin at end of pipeline
          results.push(maybe_gremlin);
        }
        maybe_gremlin = false;
        pc--; // Move program back a step
        continue;
      }
    }

    return results;
  };


  Q.add = function(this: IQuery, pipetype: PipeTypes, args: any[]): IQuery {
    const step: Step = [pipetype, args];
    this.program.push(step); // Add new step to query
    return this;
  };

  return Q as IQueryPrototype;
}
