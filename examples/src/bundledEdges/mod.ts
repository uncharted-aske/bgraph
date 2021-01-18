import { bgraph } from "../../../src";
import { renderMenu, loadGraph } from "../core/loader";
import { renderSearchPane, onSearch } from "../core/search";
import { renderGraph } from "../core/graph";
import { renderLayout } from "../core/layout";

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
