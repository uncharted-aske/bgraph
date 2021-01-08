import { IBGraph } from ".."
import { IVertex, IEdge } from "../graph/graph"
import { State, Gremlin } from "../query/query"

export interface IUtils {
  // TODO: Specify method types
  makeGremlin: (vertex: IVertex, state: State) => Gremlin,
  gotoVertex: (gremlin: Gremlin, vertex: IVertex)=> Gremlin,
  filterEdges: (filter: string | string[])=> (edge: IEdge) => Boolean,
  objectFilter: (thing: any, filter: Record<string, any>) => Boolean,
  error: (msg: string, err?: Error) => false,
  extend: (list: any, defaults: any) => any,
  remove: (list: any, item: any) => any,
}

export function hydrate(bgraph: IBGraph) {
  bgraph.makeGremlin = function(vertex: IVertex, state: State): Gremlin {
    return {vertex: vertex, state: state || {} as State };
  }

  bgraph.gotoVertex = function(gremlin: Gremlin, vertex: IVertex): Gremlin {
    // TODO: Add path tracking state to keep track of vertices gremlin visits
    return bgraph.makeGremlin(vertex, gremlin.state); // Clone gremlin
  }

  bgraph.filterEdges = function(filter: string | string[]): (edge: IEdge) => Boolean {
    return function(edge: IEdge) {
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
    }
  }

  bgraph.objectFilter = function(thing: any, filter: Record<string, any>): Boolean {
    for(const key in filter) {
      if(thing[key] !== filter[key]) {
        return false;
      }
    }
    return true;
  }

  // TODO: Rethink error return value
  bgraph.error = function(msg: string, err?: Error): false {
    if (err) {
      console.log(msg, err);
    } else {
      console.log(msg);
    }
    return false;
  }

  bgraph.extend = function(list: any, defaults: any): any {
    return Object.keys(defaults).reduce(function(acc, key) {
      if(typeof list[key] !== 'undefined') return acc;
      acc[key] = defaults[key];
      return acc;
    }, list);
  }

  bgraph.remove = function(list: any, item: any): any {
    return list.splice(list.indexOf(item), 1);
  }
}
