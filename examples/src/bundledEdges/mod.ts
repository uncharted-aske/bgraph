import { renderMenu, loadGraph } from "./js/loader";
import { bgraph } from "../../../src";
import { renderSearchPane, onSearch } from "./js/search";
import { html, render } from "lit-html";
import { renderGraph } from "./js/graph";

function renderLayout (container: HTMLElement) {
  const layoutHTML = html`
    <div class="root-container">
      <div id="graph-container" class="graph-container"></div>
      <div id="search-pane-container" class="search-pane-container"></div>
    </div>
  `;
  render(layoutHTML, container);
}

export async function bundledEdges(container: HTMLElement): Promise<void> {
  renderMenu(container, async result => {
    const G = bgraph.graph();
    const { points, layers } = await loadGraph(result, G);
    renderLayout(container);
    const graphContainer = document.getElementById('graph-container');
    renderGraph(graphContainer, points, layers);

    const searchPaneContainer = document.getElementById('search-pane-container');
    renderSearchPane(
      G,
      searchPaneContainer,
      graphContainer,
      points,
      layers,
      onSearch,
    );
  });
}
