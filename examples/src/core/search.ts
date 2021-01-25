import Tweakpane from 'tweakpane';
import { COLORS, deepCopy } from './helpers';
import { IGraph } from '../../../src/graph/graph';
import { addLayer } from './graph';
import { GraferController } from '@uncharted-aske/grafer/build/dist/mod';

function rgbToHex(r, g, b) {
  const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex.slice(0, 7);
}

export function renderSearchPane(searchContainer: HTMLElement, onSearch) {
  let selectedColor: string = COLORS.PALE_GOLD;
  let label = 'Query Label';

  const pane = new Tweakpane({
    title: 'Query',
    container: searchContainer,
    expanded: true,
  });
  const paneParams = {
    label,
    search: 'G.v().out({sourceCluster: "arenecarboxamide"}).run()',
    color: {r: 235, g: 203, b: 139},
  };
  pane.addInput(paneParams, 'label');
  pane.addInput(paneParams, 'search');
  pane.addInput(paneParams, 'color');

  pane.on('change', value => {
    if (typeof value === 'object' && value !== null && value['r'] && value['g'] && value['b']) {
      // Color change
      selectedColor = rgbToHex(value['r'], value['g'], value['b']);
    } else if (typeof value === 'string' && value.length > 1 && value[0] === 'G' && value[1] === '.') {
      // Query change
      onSearch(value, label, selectedColor);
    } else if (typeof value === 'string') {
      // Label change
      label = value;
    }
  });
}

export function transformVertexToEdgeResults(vertices) {
  // Result prints out a list of vertices that satisfy our query,
  // however to highlight graph edges we also want a list of edges
  // TODO: This should be an output transform in the search engine
  const edgeMap = new Map();
  vertices.forEach(vertex => {
    vertex._in.forEach(edge => {
      if (!edgeMap.has(edge._id)) {
        edgeMap.set(edge._id, edge);
      }
    });
    vertex._out.forEach(edge => {
      if (!edgeMap.has(edge._id)) {
        edgeMap.set(edge._id, edge);
      }
    });
  });
  const edges = Array.from(edgeMap.values());
  return edges;
}

export function onSearchBuilder(
  G: IGraph, // G namespace injected for use in query evaluation
  controller: GraferController,
  type,
  options,
) {
  return function(query: string, label: string, color) {
    const result = eval(query);
    // Result prints out a list of vertices that satisfy our query,
    // however to highlight graph edges we also want a list of edges
    let edges = transformVertexToEdgeResults(result);
    edges = deepCopy(edges, ['_in', '_out']);
    console.log('Query results:');
    console.log(edges);

    addLayer(controller, edges, label, color, type, options);
    return edges;
  };
}
