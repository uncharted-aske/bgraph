import { bgraph } from "../../../src";
import { GraferController } from '@uncharted-aske/grafer/build/dist/mod';
import { renderMenu, loadGraph } from "./loader";
import { renderSearchPane } from "../core/search";
import { renderGraph, addLayer, renderDebugMenuPane } from "../core/graph";
import { renderLayout } from "../core/layout";
import { IGraph } from "../../../src/graph/graph";

export function onSearchBuilder(
  G: IGraph, // G namespace injected for use in query evaluation
  controller: GraferController,
  grafIntraEdges,
  grafInterEdges,
  grafNodes,
  options,
) {
  return function(query: string, label: string, color) {
    const queryResults = eval(query);
    const nodeQueryLayer = {
      name: `Node: ${label}`,
      nodes: {
        type: 'Circle',
        data: [],
      },
    };
    const intraEdgeQueryLayer = {
      name: `Intra Edge: ${label}`,
      edges: {
        type: 'Straight',
        data: [],
        options,
      },
    };
    const interEdgeQueryLayer = {
      name: `Inter Edge: ${label}`,
      edges: {
        type: 'ClusterBundle',
        data: [],
        options,
      },
    };

    for (let i = 0; i < queryResults.length; i++) {
      const result = queryResults[i];
      if (result._type === 'node' && result.grafer_id != null) {
        // Set node color on query result
        grafNodes[result.grafer_id].color = color;
        nodeQueryLayer.nodes.data.push(grafNodes[result.grafer_id]);
      } else if (result._type === 'edge' && result.inter_edge_id != null) {
        // Set edge color on query result
        grafInterEdges[result.inter_edge_id].sourceColor = color;
        grafInterEdges[result.inter_edge_id].targetColor = color;
        interEdgeQueryLayer.edges.data.push(grafInterEdges[result.inter_edge_id]);
      } else if (result._type === 'edge' && result.intra_edge_id != null) {
        // Set edge color on query result
        grafIntraEdges[result.intra_edge_id].sourceColor = color;
        grafIntraEdges[result.intra_edge_id].targetColor = color;
        intraEdgeQueryLayer.edges.data.push(grafIntraEdges[result.intra_edge_id]);
      }
    }

    // Add query layers to grafer controller
    console.log('Query results: ');
    if (nodeQueryLayer.nodes.data.length > 0) {
      console.log('Node Query:');
      console.log(nodeQueryLayer);
      controller.addLayer(nodeQueryLayer, `Node: ${label}`, undefined);
    }
    if (intraEdgeQueryLayer.edges.data.length > 0) {
      console.log('Intra Edge Query:');
      console.log(intraEdgeQueryLayer);
      controller.addLayer(intraEdgeQueryLayer, `Intra Edge: ${label}`, undefined);
    }
    if (interEdgeQueryLayer.edges.data.length > 0) {
      console.log('Inter Edge Query:');
      console.log(interEdgeQueryLayer);
      controller.addLayer(interEdgeQueryLayer, `Inter Edge: ${label}`, undefined);
    }

    // Render query layers to graph and debug menu
    controller.render();
    renderDebugMenuPane(controller.viewport);
  };
}

export async function bundledEdges(container: HTMLElement): Promise<void> {
  renderMenu(container, async result => {
    const G = bgraph.graph();
    const { points, layers } = await loadGraph(result, G);
    renderLayout(container);
    const graphContainer = document.getElementById('graph-container');
    const controller = renderGraph(graphContainer, points, layers);

    const searchPaneContainer = document.getElementById('search-pane-container');
    renderSearchPane(
      searchPaneContainer,
      onSearchBuilder(
        G,
        controller,
        layers[1].edges.data,
        layers[0].edges.data,
        layers[1].nodes.data,
        {
          alpha: 0.4,
          nearDepth: 0.9,
        }
      ),
    );
  });
}
