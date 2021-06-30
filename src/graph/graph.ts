import { IBGraph } from "..";
import { IQuery } from "../query/query";

export type VertexIndex = number | string;

export interface IVertexProto {
  _id: VertexIndex,
}

export interface IVertex extends IVertexProto {
  _out: IEdge[],
  _in: IEdge[],
}

export interface IVertexPath {
  parent?: IVertexPath,
  vertex: IVertex,
}

export interface IEdgeProto {
  _out: VertexIndex,
  _in: VertexIndex,
  _label?: string,
}

export interface IEdge extends Omit<IEdgeProto, '_out' | '_in'> {
  _out: IVertex,
  _in: IVertex,
}

export interface IGraphProtoType {
  v: (this: IGraph) => IQuery,
  addVertex: (this: IGraph, vertexProto: IVertexProto) => VertexIndex | false,
  addEdge: (this: IGraph, edgeProto: IEdgeProto) => void | false,
  addVertices: (this: IGraph, vertexProtos: IVertexProto[]) => void,
  addEdges: (this: IGraph, edgeProtos: IEdgeProto[]) => void,
  removeVertex: (this: IGraph, vertex: IVertex) => void,
  removeEdge: (this: IGraph, edge: IEdge) => void,
  findVertices: (this: IGraph, args: (VertexIndex | Record<string, any>)[]) => IVertex[],
  findVerticesByIds: (this: IGraph, ids: VertexIndex[]) => IVertex[],
  findVertexById: (this: IGraph, vertex_id: VertexIndex) => IVertex,
  searchVertices: (filter: Record<string, any>) => IVertex[],
  findOutEdges: (vertex: IVertex) => IEdge[],
  findInEdges: (vertex: IVertex) => IEdge[],
}

export interface IGraph extends IGraphProtoType {
  edges: IEdge[],
  vertices: IVertex[],
  vertexIndex: Map<VertexIndex, IVertex>
  autoid: number, // Counter tracking last used automatic index
}

export function prototype(bgraph: IBGraph): IGraphProtoType {
  const G: Partial<IGraphProtoType> = {};

  // Query intiliazation method, all queries begin with: g.v()...
  G.v = function(this: IGraph): IQuery {
    const query = bgraph.query(this);
    // eslint-disable-next-line prefer-rest-params
    query.add('vertex', [].slice.call(arguments)); // add vertex as first query pipe
    return query;
  };

  G.addVertex = function(this: IGraph, vertexProto: IVertexProto): VertexIndex | false {
    // TODO: Use hashes to autoid
    if(typeof(vertexProto._id) === 'number' && vertexProto._id >= this.autoid) {
      this.autoid = vertexProto._id + 1;
    }
    if(!vertexProto._id && vertexProto._id != 0) {
      vertexProto._id = this.autoid++;
    } else if(this.findVertexById(vertexProto._id)) {
      return bgraph.error('A vertex with id ' + vertexProto._id + ' already exists');
    }

    const vertex = vertexProto as IVertex;
    this.vertices.push(vertex);
    this.vertexIndex.set(vertex._id, vertex);
    // Create empty edge arrays these will be populated when adding edges
    vertex._out = [];
    vertex._in = [];
    return vertex._id;
  };

  G.addEdge = function(this: IGraph, edgeProto: IEdgeProto): false | void {
    const edge: Partial<IEdge> = edgeProto as unknown as Partial<IEdge>;

    edge._in  = this.findVertexById(edgeProto._in);
    edge._out = this.findVertexById(edgeProto._out);
    edge._label = edgeProto._label;

    if(!(edge._in && edge._out)) {
      return bgraph.error("That edge's " + (edge._in ? 'out' : 'in') + " vertex wasn't found");
    }

    edge._out._out.push(edge as IEdge); // Populate source vertex's outward edges with new edge
    edge._in._in.push(edge as IEdge); // Populate source vertex's outward edges with new edge
    this.edges.push(edge as IEdge);
  };

  G.addVertices = function(this: IGraph, vertexProtos: IVertexProto[]): void { vertexProtos.forEach(this.addVertex.bind(this)); };
  G.addEdges = function(this: IGraph, edgeProtos: IEdgeProto[]): void { edgeProtos.forEach(this.addEdge.bind(this)); };

  G.removeVertex = function(this: IGraph, vertex: IVertex): void {
    vertex._in.slice().forEach(G.removeEdge.bind(this));
    vertex._out.slice().forEach(G.removeEdge.bind(this));
    bgraph.remove(this.vertices, vertex);
    this.vertexIndex.delete(vertex._id);
  };

  G.removeEdge = function(this: IGraph, edge: IEdge): void {
    bgraph.remove(edge._in._in, edge);
    bgraph.remove(edge._out._out, edge);
    bgraph.remove(this.edges, edge);
  };

  // General vertex search method
  G.findVertices = function(this: IGraph, args: (VertexIndex | Record<string, any>)[]): IVertex[] {
    if(typeof args[0] == 'object' || typeof args[0] == 'function') {
      // Filter vertices to match object property values or that pass filter function
      return this.searchVertices(args[0]);
    } else if(args.length == 0) {
      // Costly copy of all vertices
      return this.vertices.slice();
    } else {
      // Find all vertices with unique id
      return this.findVerticesByIds(args as VertexIndex[]);
    }
  };

  G.findVerticesByIds = function(this: IGraph, ids: VertexIndex[]): IVertex[] {
    if(ids.length == 1) {
      const vertex = this.findVertexById(ids[0]);
      return vertex ? [vertex] : [];
    }
    return ids.map(this.findVertexById.bind(this)).filter(Boolean) as IVertex[];
  };

  G.findVertexById = function(this: IGraph, vertex_id: VertexIndex): IVertex {
    return this.vertexIndex.get(vertex_id);
  };

  G.searchVertices = function(filter: (vertex: any) => boolean | Record<string, any>): IVertex[] {
    if (typeof filter === 'object') {
      return this.vertices.filter(function(vertex: IVertex) {
        return bgraph.objectFilter(vertex, filter);
      });
    } else if (typeof filter === 'function') {
      return this.vertices.filter(filter);
    } else {
      bgraph.error('Filter must be function or object: ' + filter);
    }
  };

  G.findOutEdges = function(vertex: IVertex): IEdge[] { return vertex._out; };
  G.findInEdges  = function(vertex: IVertex): IEdge[] { return vertex._in;  };

  return G as IGraphProtoType;
}
