import { GraferController, DebugMenu } from '@uncharted-aske/grafer/build/dist/mod.js';


function createGrafCanvas(container) {
  container.innerHTML = `<canvas class="grafer_container"></canvas>`;
  const canvas = document.querySelector('.grafer_container');
  return canvas;
}

function renderDebugMenuPane(viewport) {
  // Search and remove existing debug menu panel
  const debugMenuPane = document.querySelector('.tp-dfwv');
  if (debugMenuPane) {
    debugMenuPane.remove();
  }

  const debugMenu = new DebugMenu(viewport);
  return debugMenu;
}

export function renderGraph(container, points, layers) {
  const canvas = createGrafCanvas(container);
  const controller = new GraferController(canvas, { points, layers });
  renderDebugMenuPane(controller.viewport);
  return controller;
}

export function addLayer(edges, label, container, points, layers, color, type, options) {
  const queryLayer = {
    name: label,
    edges: {
      type,
      data: [],
      options,
    },
  };

  // Set edge color on query results
  queryLayer.edges.data = edges.map(edge => {
    edge.sourceColor = color;
    edge.targetColor = color;
    return edge;
  });
  layers.push(queryLayer);

  renderGraph(container, points, layers);
}
