import { bgraph } from '../../../../src';
import { renderGraph } from '../../core/graph';
import { renderSearchPane, onSearchBuilder } from '../../core/search';
import { graph } from '@uncharted.software/grafer';
import { renderLayout } from '../../core/layout';

function transformToBGraph(nodes, edges) {
  // FIXME: Function creates a shallow copy of nodes/edges
  const nodeMap = {};
  const newNodes = nodes.map(node => {
    const newNode = Object.assign({}, node, {_type: 'node'});
    nodeMap[newNode._id] = newNode;
    return newNode;
  });

  const newEdges = [];
  for (let i = 0; i < edges.length; i++) {
    const edge = Object.assign({}, edges[i], {_type: 'edge'});
    const source = {_id: `source_${edge._id}`, _out: edge._out, _in: edge._id};
    const target = {_id: `target_${edge._id}`, _out: edge._id, _in: edge._in};
    newNodes.push(edge);
    newEdges.push(source);
    newEdges.push(target);
  }
  return [newNodes, newEdges];
}


export async function grid(container: HTMLElement): Promise<void> {
  const edges = [
    { _id: 'AE', id: 'AE', source: 'A', target: 'E', _out: 'A', _in: 'E', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "GR", x: 10,  y: -10 },
    { _id: 'AD', id: 'AD', source: 'A', target: 'D', _out: 'A', _in: 'D', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "GR", x: 0,   y: -10 },
    { _id: 'BA', id: 'BA', source: 'B', target: 'A', _out: 'B', _in: 'A', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "RR", x: -10, y: 0   },
    { _id: 'BE', id: 'BE', source: 'B', target: 'E', _out: 'B', _in: 'E', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "GR", x: 0,   y: -10 },
    { _id: 'CB', id: 'CB', source: 'C', target: 'B', _out: 'C', _in: 'B', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "GG", x: -10, y: 0   },
    { _id: 'CE', id: 'CE', source: 'C', target: 'E', _out: 'C', _in: 'E', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "GR", x: -10, y: -10 },
    { _id: 'DE', id: 'DE', source: 'D', target: 'E', _out: 'D', _in: 'E', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "RR", x: 10,  y: 0   },
    { _id: 'DG', id: 'DG', source: 'D', target: 'G', _out: 'D', _in: 'G', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "RB", x: 0,   y: -10 },
    { _id: 'EF', id: 'EF', source: 'E', target: 'F', _out: 'E', _in: 'F', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "RR", x: 10,  y: 0   },
    { _id: 'EG', id: 'EG', source: 'E', target: 'G', _out: 'E', _in: 'G', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "RB", x: -10, y: -10 },
    { _id: 'EH', id: 'EH', source: 'E', target: 'H', _out: 'E', _in: 'H', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "RB", x: 0,   y: -10 },
    { _id: 'EI', id: 'EI', source: 'E', target: 'I', _out: 'E', _in: 'I', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "RB", x: 10,  y: -10 },
    { _id: 'FC', id: 'FC', source: 'F', target: 'C', _out: 'F', _in: 'C', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "RG", x: 0,   y: 10  },
    { _id: 'GH', id: 'GH', source: 'G', target: 'H', _out: 'G', _in: 'H', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "BB", x: 10,  y: 0   },
    { _id: 'HI', id: 'HI', source: 'H', target: 'I', _out: 'H', _in: 'I', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "BB", x: 10,  y: 0   },
    { _id: 'IF', id: 'IF', source: 'I', target: 'F', _out: 'I', _in: 'F', sourceColor: '#5e81ac', targetColor: '#b48ead', colors: "BR", x: 0,   y: 10  },
  ];

  const nodes = [
    { _id: 'A', id: 'A', point: 'A', x: -10.0, y: 10.0,   label: 'A', color: 'green' },
    { _id: 'B', id: 'B', point: 'B', x: 0.0,   y: 10.0,   label: 'B', color: 'green' },
    { _id: 'C', id: 'C', point: 'C', x: 10.0,  y: 10.0,   label: 'C', color: 'green' },
    { _id: 'D', id: 'D', point: 'D', x: -10.0, y: 0.0,    label: 'D', color: 'red'   },
    { _id: 'E', id: 'E', point: 'E', x: 0.0,   y: 0.0,    label: 'E', color: 'red'   },
    { _id: 'F', id: 'F', point: 'F', x: 10.0,  y: 0.0,    label: 'F', color: 'red'   },
    { _id: 'G', id: 'G', point: 'G', x: -10.0, y: -10.0,  label: 'G', color: 'blue'  },
    { _id: 'H', id: 'H', point: 'H', x: 0.0,   y: -10.0,  label: 'H', color: 'blue'  },
    { _id: 'I', id: 'I', point: 'I', x: 10.0,  y: -10.0,  label: 'I', color: 'blue'  },
  ];

  const nodesLayer = {
    data: nodes,
  };

  const edgesLayer = {
    data: edges,
    options: {
      desaturate: 0.50,
      fade: 0.8,
    },
  };

  const labelsLayer = {
    type: "PointLabel",
    data: nodes,
    mappings: {
      background: (): boolean => true,
      fontSize: (): number => 12,
      padding: (): [number, number] => [8, 5],
    },
    options: {
      visibilityThreshold: 8,
      labelPlacement: graph.labels.PointLabelPlacement.TOP,
    },
  };

  const layers = [
    {
      name: "Grid",
      nodes: nodesLayer,
      edges: edgesLayer,
      labels: labelsLayer,
    },
  ];
  const [bNodes, bEdges] = transformToBGraph(nodes, edges);
  const G = bgraph.graph(bNodes, bEdges);
  window.G = G;

  renderLayout(container);
  const graphContainer = document.getElementById('graph-container');
  const searchPaneContainer = document.getElementById('search-pane-container');

  const controller = renderGraph(graphContainer, nodesLayer, layers);
  renderSearchPane(
    searchPaneContainer,
    onSearchBuilder(G, controller, 'Straight', {
      alpha: 1.0,
      fade: 0,
      desaturate: 0,
    }),
    controller
  );
}
