import Tweakpane from 'tweakpane';
import { COLORS, deepCopy } from './helpers';
import { IGraph } from '../../../src/graph/graph';
import { addLayer, renderDebugMenuPane } from './graph';
import { GraferController } from '@uncharted.software/grafer';

function rgbToHex(r, g, b) {
  const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex.slice(0, 7);
}

export function renderSearchPane(searchContainer: HTMLElement, onSearch, controller: GraferController) {
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

  // Add remove layer button
  const removeLayerButton = pane.addButton({title: 'Remove Layer'});
  removeLayerButton.on('click', () => {
    if (controller.viewport.graph.layers.length > 2) {
      // Only remove query layers
      controller.removeLayerByIndex(0);
      renderDebugMenuPane(controller.viewport);
    }
  });

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

export function onSearchBuilder(
  G: IGraph, // G namespace injected for use in query evaluation
  controller: GraferController,
  type,
  options
) {
  return function(query: string, label: string, color) {
    const result = eval(query);
    const bnodes = deepCopy(result, ['_in', '_out']);

    // Result prints out a list of vertices that satisfy our query,
    console.log('Query results: ');
    console.log(bnodes);

    addLayer(controller, bnodes, label, color, type, options);
    return bnodes;
  };
}
