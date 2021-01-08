import * as query from "./query/query";
import * as graph from "./graph/graph";
import * as transform from "./transformers/transform";
import * as pipetypes from "./pipes/pipetypes";
import * as alias from "./alias/alias";
import * as utils from "./utils/utils";
import { IGraph, IGraphProtoType, IVertex, IEdge } from "./graph/graph";
import { IQuery, IQueryPrototype } from "./query/query";
import { IPipe } from "./pipes/pipetypes";
import { IAlias } from "./alias/alias";
import { ITransform } from "./transformers/transform";
import { IUtils } from "./utils/utils";

export interface IBGraph extends IPipe, IAlias, ITransform, IUtils {
  G: IGraphProtoType,
  Q: IQueryPrototype,
  graph: (V?: Partial<IVertex>[], E?: IEdge[]) => IGraph,
  query: (graph: IGraph) => IQuery,
}

export const bgraph: Partial<IBGraph> = {};

// Initialize graph prototype
bgraph.G = graph.prototype(bgraph as IBGraph);

// Graph factory
bgraph.graph = function(V?: Partial<IVertex>[], E?: IEdge[]): IGraph {
  const graph: IGraph = Object.create( bgraph.G );
  // Set graph properties
  graph.edges = [];
  graph.vertices = [];
  graph.vertexIndex = new Map();
  graph.autoid = 0;
  // Populate vertices and edges
  if(Array.isArray(V)) graph.addVertices(V);
  if(Array.isArray(E)) graph.addEdges(E);
  return graph;
}

// Initialize query prototype
bgraph.Q = query.prototype(bgraph as IBGraph);

// Query factory, called by graph's query initializer
bgraph.query = function(graph: IGraph): IQuery {
  const query: IQuery = Object.create( bgraph.Q );
  // Set query properties
  query.graph = graph;
  query.state = [];
  query.program = [];
  query.gremlins = [];
  return query;
}

// Initialize transformers and extend bgraph with transform methods
bgraph.T = [];
transform.hydrate(bgraph as IBGraph);

// Initialize pipes and extend bgraph with pipe methods
bgraph.Pipetypes = new Map();
pipetypes.hydrate(bgraph as IBGraph);

// Extend bgraph with alias methods
alias.hydrate(bgraph as IBGraph);

// Extend bgraph with utility methods
utils.hydrate(bgraph as IBGraph);
