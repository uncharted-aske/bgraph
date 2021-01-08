import { IBGraph } from "..";
import { IQuery } from "../query/query";

export type VertexIndex = number;
export interface IVertex {
  _id: VertexIndex,
  _out: IEdge[],
  _in: IEdge[],
};

export interface IEdge {
  _out: IVertex,
  _in: IVertex,
  _label?: string,
};

export interface IGraphProtoType {
  v: (this: IGraph) => IQuery,
  addVertex: (this: IGraph, partialVertex: Partial<IVertex>) => VertexIndex | false,
  addEdge: (this: IGraph, edge: IEdge) => void | false,
  addVertices: (this: IGraph, partialVertices: Partial<IVertex>[]) => void,
  addEdges: (this: IGraph, edges: IEdge[]) => void,
  removeVertex: (this: IGraph, vertex: IVertex) => void,
  removeEdge: (this: IGraph, edge: IEdge) => void,
  findVertices: (this: IGraph, args: (VertexIndex | Record<string, any>)[]) => IVertex[],
  findVerticesByIds: (this: IGraph, ids: VertexIndex[]) => IVertex[],
  findVertexById: (this: IGraph, vertex_id: VertexIndex) => IVertex,
  searchVertices: (filter: Record<string, any>) => IVertex[],
  findOutEdges: (vertex: IVertex) => IEdge[],
  findInEdges: (vertex: IVertex) => IEdge[],
};

export interface IGraph extends IGraphProtoType {
  edges: IEdge[],
  vertices: IVertex[],
  vertexIndex: Map<VertexIndex, IVertex>
  autoid: number, // Counter tracking last used automatic index
};

export function prototype(bgraph: IBGraph): IGraphProtoType {
  const G: Partial<IGraphProtoType> = {};

  // Query intiliazation method, all queries begin with: g.v()...
  G.v = function(this: IGraph): IQuery {
    const query = bgraph.query(this);
    query.add('vertex', [].slice.call(arguments)); // add vertex as first query pipe
    return query;
  }

  G.addVertex = function(this: IGraph, partialVertex: Partial<IVertex>): VertexIndex | false {
    if(partialVertex._id >= this.autoid) {
      this.autoid = partialVertex._id + 1;
    }
    if(!partialVertex._id && partialVertex._id != 0) {
      partialVertex._id = this.autoid++;
    } else if(this.findVertexById(partialVertex._id)) {
      return bgraph.error('A vertex with id ' + partialVertex._id + ' already exists');
    }

    const vertex = partialVertex as IVertex;
    this.vertices.push(vertex);
    this.vertexIndex.set(vertex._id, vertex);
    // Create empty edge arrays these will be populated when adding edges
    vertex._out = [];
    vertex._in = [];
    return vertex._id;
  }

  G.addEdge = function(this: IGraph, edge: IEdge): false | void {
    // TODO: Remove typescript ignores and fix type error
    //@ts-ignore
    edge._in  = this.findVertexById(edge._in);
    //@ts-ignore
    edge._out = this.findVertexById(edge._out);

    if(!(edge._in && edge._out)) {
      return bgraph.error("That edge's " + (edge._in ? 'out' : 'in') + " vertex wasn't found");
    }

    edge._out._out.push(edge); // Populate source vertex's outward edges with new edge
    edge._in._in.push(edge); // Populate source vertex's outward edges with new edge
    this.edges.push(edge);
  }

  G.addVertices = function(this: IGraph, partialVertices: Partial<IVertex>[]): void { partialVertices.forEach(this.addVertex.bind(this)) }
  G.addEdges = function(this: IGraph, edges: IEdge[]): void { edges.forEach(this.addEdge.bind(this)) }

  G.removeVertex = function(this: IGraph, vertex: IVertex): void {
    vertex._in.slice().forEach(G.removeEdge.bind(this));
    vertex._out.slice().forEach(G.removeEdge.bind(this));
    bgraph.remove(this.vertices, vertex);
    this.vertexIndex.delete(vertex._id);
  }

  G.removeEdge = function(this: IGraph, edge: IEdge): void {
    bgraph.remove(edge._in._in, edge);
    bgraph.remove(edge._out._out, edge);
    bgraph.remove(this.edges, edge);
  }

  // General vertex search method
  G.findVertices = function(this: IGraph, args: (VertexIndex | Record<string, any>)[]): IVertex[] {
    if(typeof args[0] == 'object') {
      // Filter vertices to match object property values
      return this.searchVertices(args[0]);
    } else if(args.length == 0) {
      // Costly copy of all vertices
      return this.vertices.slice();
    } else {
      // Find all vertices with unique id
      return this.findVerticesByIds(args as VertexIndex[]);
    }
  }

  G.findVerticesByIds = function(this: IGraph, ids: VertexIndex[]): IVertex[] {
    if(ids.length == 1) {
      const vertex = this.findVertexById(ids[0]);
      return vertex ? [vertex] : [];
    }
    return ids.map(this.findVertexById.bind(this)).filter(Boolean) as IVertex[];
  }

  G.findVertexById = function(this: IGraph, vertex_id: VertexIndex): IVertex {
    return this.vertexIndex.get(vertex_id);
  }

  G.searchVertices = function(filter: Record<string, any>): IVertex[] {
    return this.vertices.filter(function(vertex: IVertex) {
      return bgraph.objectFilter(vertex, filter);
    });
  }

  G.findOutEdges = function(vertex: IVertex): IEdge[] { return vertex._out; }
  G.findInEdges  = function(vertex: IVertex): IEdge[] { return vertex._in;  }

  return G as IGraphProtoType;
}
