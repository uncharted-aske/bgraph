import { bgraph } from '../../../../src';
import { renderGraph } from '../../core/graph';
import { renderSearchPane, onSearch } from '../../core/search';
import { PointLabelPlacement } from '@uncharted-aske/grafer/build/dist/mod.js';
import { renderLayout } from '../../core/layout';

export async function grid(container: HTMLElement): Promise<void> {
  const edges = [
    { _id: 'AE', id: 'AE', source: 'A', target: 'E', _out: 'A', _in: 'E', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'AD', id: 'AD', source: 'A', target: 'D', _out: 'A', _in: 'D', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'BA', id: 'BA', source: 'B', target: 'A', _out: 'B', _in: 'A', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'BE', id: 'BE', source: 'B', target: 'E', _out: 'B', _in: 'E', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'CB', id: 'CB', source: 'C', target: 'B', _out: 'C', _in: 'B', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'CE', id: 'CE', source: 'C', target: 'E', _out: 'C', _in: 'E', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'DE', id: 'DE', source: 'D', target: 'E', _out: 'D', _in: 'E', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'DG', id: 'DG', source: 'D', target: 'G', _out: 'D', _in: 'G', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'EF', id: 'EF', source: 'E', target: 'F', _out: 'E', _in: 'F', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'EG', id: 'EG', source: 'E', target: 'G', _out: 'E', _in: 'G', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'EH', id: 'EH', source: 'E', target: 'H', _out: 'E', _in: 'H', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'EI', id: 'EI', source: 'E', target: 'I', _out: 'E', _in: 'I', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'FC', id: 'FC', source: 'F', target: 'C', _out: 'F', _in: 'C', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'GH', id: 'GH', source: 'G', target: 'H', _out: 'G', _in: 'H', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'HI', id: 'HI', source: 'H', target: 'I', _out: 'H', _in: 'I', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
    { _id: 'IF', id: 'IF', source: 'I', target: 'F', _out: 'I', _in: 'F', sourceColor: '#5e81ac', targetColor: '#b48ead', type: "Activation", belief: 0.95 },
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
      labelPlacement: PointLabelPlacement.TOP,
    },
  };

  const layers = [
    {
      name: "Grid",
      nodes: nodesLayer,
      edges: edgesLayer,
      labels: labelsLayer
    },
  ];
  const G = bgraph.graph(nodes, edges);

  renderLayout(container);
  const graphContainer = document.getElementById('graph-container');
  const searchPaneContainer = document.getElementById('search-pane-container');

  renderGraph(graphContainer, nodesLayer, layers);
  renderSearchPane(
    G,
    searchPaneContainer,
    graphContainer,
    nodesLayer,
    layers,
    onSearch,
  );
}