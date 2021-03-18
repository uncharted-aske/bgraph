import { html, render } from 'lit-html';
import Tweakpane from 'tweakpane';
import { graph } from '@uncharted.software/grafer';
import {LayoutInfo, parseJSONL, COLORS} from '../core/helpers';
import { IGraph } from '../../../src/graph/graph';

function createFileInput(cb: () => void): HTMLInputElement {
  const input = document.createElement('input');
  input.type = 'file';
  input.multiple = false;
  input.addEventListener('change', cb);
  return input;
}

export function renderMenu(container: HTMLElement, cb: (result: LayoutInfo) => void): void {
  render(html`<div id="menu" class="start_menu"></div>`, container);

  const result: LayoutInfo = {
    points: 'No file selected.',
    pointsFile: null,
    clusters: 'No file selected.',
    clustersFile: null,
    clusterEdgesMode: 'curved',
    clusterEdges: 'No file selected.',
    clusterEdgesFile: null,
    nodes: 'No file selected.',
    nodesFile: null,
    nodeEdges: 'No file selected.',
    nodeEdgesFile: null,
    bnodes: 'No file selected.',
    bnodesFile: null,
    bnodeEdges: 'No file selected.',
    bnodeEdgesFile: null,
  };

  const menu = new Tweakpane({
    title: 'Grafer Loader',
    container: document.querySelector('#menu'),
  });

  const pointsInput = createFileInput(() => {
    if (pointsInput.files.length) {
      result.pointsFile = pointsInput.files[0];
      result.points = result.pointsFile.name;
    } else {
      result.points = 'No file selected.';
      result.pointsFile = null;
    }
  });
  menu.addMonitor(result, 'points');
  menu.addButton({ title: 'browse...' }).on('click', () => pointsInput.click());

  menu.addSeparator();

  const clustersInput = createFileInput(() => {
    if (clustersInput.files.length) {
      result.clustersFile = clustersInput.files[0];
      result.clusters = result.clustersFile.name;
    } else {
      result.clusters = 'No file selected.';
      result.clustersFile = null;
    }
  });
  menu.addMonitor(result, 'clusters');
  menu.addButton({ title: 'browse...' }).on('click', () => clustersInput.click());

  menu.addInput(result, 'clusterEdgesMode', {
    options: {
      bundle: 'bundle',
      straight: 'straight',
      curved: 'curved',
    },
  });

  const clusterEdgesInput = createFileInput(() => {
    if (clusterEdgesInput.files.length) {
      result.clusterEdgesFile = clusterEdgesInput.files[0];
      result.clusterEdges = result.clusterEdgesFile.name;
    } else {
      result.clusterEdges = 'No file selected.';
      result.clusterEdgesFile = null;
    }
  });
  menu.addMonitor(result, 'clusterEdges');
  menu.addButton({ title: 'browse...' }).on('click', () => clusterEdgesInput.click());

  menu.addSeparator();

  const nodesInput = createFileInput(() => {
    if (nodesInput.files.length) {
      result.nodesFile = nodesInput.files[0];
      result.nodes = result.nodesFile.name;
    } else {
      result.nodes = 'No file selected.';
      result.nodesFile = null;
    }
  });
  menu.addMonitor(result, 'nodes');
  menu.addButton({ title: 'browse...' }).on('click', () => nodesInput.click());

  const nodeEdgesInput = createFileInput(() => {
    if (nodeEdgesInput.files.length) {
      result.nodeEdgesFile = nodeEdgesInput.files[0];
      result.nodeEdges = result.nodeEdgesFile.name;
    } else {
      result.nodeEdges = 'No file selected.';
      result.nodeEdgesFile = null;
    }
  });
  menu.addMonitor(result, 'nodeEdges');
  menu.addButton({ title: 'browse...' }).on('click', () => nodeEdgesInput.click());

  menu.addSeparator();
  const bnodesInput = createFileInput(() => {
    if (bnodesInput.files.length) {
      result.bnodesFile = bnodesInput.files[0];
      result.bnodes = result.bnodesFile.name;
    } else {
      result.bnodes = 'No file selected.';
      result.bnodesFile = null;
    }
  });
  menu.addMonitor(result, 'bnodes');
  menu.addButton({ title: 'browse...' }).on('click', () => bnodesInput.click());

  const bnodeEdgesInput = createFileInput(() => {
    if (bnodeEdgesInput.files.length) {
      result.bnodeEdgesFile = bnodeEdgesInput.files[0];
      result.bnodeEdges = result.bnodeEdgesFile.name;
    } else {
      result.bnodeEdges = 'No file selected.';
      result.bnodeEdgesFile = null;
    }
  });
  menu.addMonitor(result, 'bnodeEdges');
  menu.addButton({ title: 'browse...' }).on('click', () => bnodeEdgesInput.click());

  const loadBtn = menu.addButton({ title: 'load' });
  loadBtn.on('click', () => {
    cb(result);
  });
}

export async function loadGraph(info: LayoutInfo, G: IGraph): Promise<any> {
  if (info.pointsFile) {
    const layers = [];

    const points = {
      data: [],
    };

    await parseJSONL(info.pointsFile, json => {
      points.data.push(Object.assign({}, json, {
        // Search specific properties
        _id: json.id,
      }));
    });

    const clusterBundleEdges = {
      type: 'ClusterBundle',
      data: [],
      options: {
        fade: 0.9,
        desaturate: 0.5,
        nearDepth: 0.95,
        farDeth: 1.00
      },
    };

    const clusterStraightEdges = {
      type: 'Straight',
      data: [],
      options: {
        alpha: 1.0,
        fade: 0.5,
        desaturate: 0.8
      },
      mappings: {
        source: (entry): number => 'sourceCluster' in entry ? entry.sourceCluster : entry.source,
        target: (entry): number => 'targetCluster' in entry ? entry.targetCluster : entry.target,
      },
    };

    const clusterCurvedEdges = {
      type: 'CurvedPath',
      data: [],
      options: {
        alpha: 1.0,
        fade: 0.5,
        desaturate: 0.8
      },
    };

    let edges;
    if (info.clusterEdgesMode === 'bundle') {
      edges = clusterBundleEdges;
    } else if (info.clusterEdgesMode === 'curved') {
      edges = clusterCurvedEdges;
    } else {
      edges = clusterStraightEdges;
    }

    const clusterLayer = {
      name: 'Clusters',
      labels: {
        type: 'RingLabel',
        data: [],
        mappings: {
          background: (): boolean => false,
          fontSize: (): number => 14,
          padding: (): number => 0,
        },
        options: {
          visibilityThreshold: 128,
          repeatLabel: -1,
          repeatGap: 64,
          fade: 0.65,
          desat: 0.5,
          nearDepth: 0.9,
          farDepth: 1.00
        },
      },
      edges,
    };
    layers.push(clusterLayer);

    if (info.clustersFile) {
      const nodes = clusterLayer.labels;
      await parseJSONL(info.clustersFile, json => {
        nodes.data.push(Object.assign({}, json, {
          color: COLORS.GLACIER_BLUE,
        }));
      });
    }

    if (info.clusterEdgesFile) {
      const edges = clusterLayer.edges;
      await parseJSONL(info.clusterEdgesFile, json => {
        edges.data.push(Object.assign({}, json, {
          // Grafer specific properties
          sourceColor: COLORS.HORIZON_BLUE,
          targetColor: COLORS.HORIZON_BLUE,
          // Search specific properties
          _id: json.id,
          _out: json.source,
          _in: json.target,
        }));
      });
    }

    const nodeLayer = {
      name: 'Nodes',
      nodes: {
        type: 'Circle',
        data: [],
        options: {
          farDepth: 0.1
        }
      },
      edges: {
        data: [],
        options: {
          fade: 0.85,
          desaturate: 0.5,
          nearDepth: 0.8,
          farDepth: 0.9
        },
      },
      labels: {
        type: 'PointLabel',
        data: [],
        mappings: {
          background: (): boolean => true,
          fontSize: (): number => 12,
          padding: (): [number, number] => [8, 5],
        },
        options: {
          visibilityThreshold: 8,
          labelPlacement: graph.labels.PointLabelPlacement.TOP,
          farDepth: 0.1
        },
      },
    };
    layers.push(nodeLayer);

    if (info.nodesFile) {
      const nodes = nodeLayer.nodes;
      await parseJSONL(info.nodesFile, json => {
        nodes.data.push(Object.assign({}, json, {
          color: COLORS.BRASS_RED,
        }));
      });
      nodeLayer.labels.data = nodes.data;
    }

    if (info.nodeEdgesFile) {
      const edges = nodeLayer.edges;
      await parseJSONL(info.nodeEdgesFile, json => {
        edges.data.push(Object.assign({}, json, {
          sourceColor: COLORS.PALE_GOLD,
          targetColor: COLORS.PALE_GOLD,
        }));
      });
    }

    const bnodes = [];
    if (info.bnodesFile) {
      await parseJSONL(info.bnodesFile, json => {
        bnodes.push(json);
      });
    }

    const bedges = [];
    if (info.bnodeEdgesFile) {
      await parseJSONL(info.bnodeEdgesFile, json => {
        bedges.push(json);
      });
    }

    bnodes.forEach(G.addVertex.bind(G))
    bedges.forEach(G.addEdge.bind(G));

    return { points, layers };
  }
}
