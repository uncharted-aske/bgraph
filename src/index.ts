import * as query from "./query/query";
import * as graph from "./graph/graph";
import * as transform from "./transformers/transform";
import * as pipetypes from "./pipes/pipetypes";
import * as alias from "./alias/alias";
import * as utils from "./utils/utils";
import { IGraph, IGraphProtoType, IVertexProto, IEdgeProto } from "./graph/graph";
import { IQuery, IQueryPrototype } from "./query/query";
import { IPipe } from "./pipes/pipetypes";
import { IAlias } from "./alias/alias";
import { ITransform } from "./transformers/transform";
import { IUtils } from "./utils/utils";

interface IBGraph extends IPipe, IAlias, ITransform, IUtils {
  G: IGraphProtoType,
  Q: IQueryPrototype,
  graph: (V?: IVertexProto[], E?: IEdgeProto[]) => IGraph,
  query: (graph: IGraph) => IQuery,
}

const _bgraph: Partial<IBGraph> = {};

// Initialize graph prototype
_bgraph.G = graph.prototype(_bgraph as IBGraph);

// Graph factory
_bgraph.graph = function(V?: IVertexProto[], E?: IEdgeProto[]): IGraph {
  const graph: IGraph = Object.create( _bgraph.G );
  // Set graph properties
  graph.edges = [];
  graph.vertices = [];
  graph.vertexIndex = new Map();
  graph.autoid = 0;
  // Populate vertices and edges
  if(Array.isArray(V)) graph.addVertices(V);
  if(Array.isArray(E)) graph.addEdges(E);
  return graph;
};

// Initialize query prototype
_bgraph.Q = query.prototype(_bgraph as IBGraph);

// Query factory, called by graph's query initializer
_bgraph.query = function(graph: IGraph): IQuery {
  const query: IQuery = Object.create( _bgraph.Q );
  // Set query properties
  query.graph = graph;
  query.state = [];
  query.program = [];
  query.gremlins = [];
  return query;
};

// Initialize transformers and extend bgraph with transform methods
_bgraph.T = [];
transform.hydrate(_bgraph as IBGraph);

// Initialize pipes and extend bgraph with pipe methods
_bgraph.Pipetypes = new Map();
pipetypes.hydrate(_bgraph as IBGraph);

// Extend bgraph with alias methods
alias.hydrate(_bgraph as IBGraph);

// Extend bgraph with utility methods
utils.hydrate(_bgraph as IBGraph);

export const bgraph = _bgraph as IBGraph;
export {
  IBGraph,
  IGraph,
};
