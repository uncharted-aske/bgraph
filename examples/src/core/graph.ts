import { GraferController, UX } from '@uncharted.software/grafer';


function createGrafCanvas(container) {
  container.innerHTML = `<canvas class="grafer_container"></canvas>`;
  const canvas = document.querySelector('.grafer_container');
  return canvas;
}

export function renderDebugMenuPane(viewport) {
  // Search and remove existing debug menu panel
  const debugMenuPane = document.querySelector('.tp-dfwv');
  if (debugMenuPane) {
    debugMenuPane.remove();
  }

  const debugMenu = new UX.DebugMenu(viewport);
  return debugMenu;
}

export function renderGraph(container, points, layers) {
  const canvas = createGrafCanvas(container);
  const controller = new GraferController(canvas, { points, layers });
  renderDebugMenuPane(controller.viewport);
  return controller;
}

export function addLayer(controller: GraferController, queryResults, label, color, type, options) {
  const queryLayer = {
    name: label,
    nodes: {
      type: 'Circle',
      data: [],
    },
    edges: {
      type,
      data: [],
      options,
    },
  };

  for (let i = 0; i < queryResults.length; i++) {
    const result = queryResults[i];
    if (result._type === 'node') {
      // Set node color on query result
      result.color = color;
      queryLayer.nodes.data.push(result);
    } else if (result._type === 'edge') {
      // Set edge color on query result
      result.sourceColor = color;
      result.targetColor = color;
      queryLayer.edges.data.push(result);
    }
  }

  // Add query layer to graph and debug menu
  controller.addLayer(queryLayer, label, undefined);
  controller.render();
  renderDebugMenuPane(controller.viewport);
}
