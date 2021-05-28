import { html, render } from "lit-html";

export function renderLayout (container: HTMLElement) {
  const layoutHTML = html`
    <div class="root-container">
      <div id="graph-container" class="graph-container"></div>
      <div id="search-pane-container" class="search-pane-container"></div>
    </div>
  `;
  render(layoutHTML, container);
}
