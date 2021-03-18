import { DataFile } from '@dekkai/data-source/build/lib/file/DataFile';

export interface LayoutInfo {
  points: string;
  pointsFile: File;
  clusters: string;
  clustersFile: File;
  clusterEdgesMode: 'bundle' | 'straight' | 'curved',
  clusterEdges: string;
  clusterEdgesFile: File;
  nodes: string;
  nodesFile: File;
  nodeEdges: string;
  nodeEdgesFile: File;
  // BGraph Info
  bnodes: string;
  bnodesFile: File;
  bnodeEdges: string;
  bnodeEdgesFile: File;
}

export enum COLORS {
  HORIZON_BLUE = '#5e81ac',
  BRASS_RED    = '#d08770',
  PALE_GOLD    = '#ebcb8b',
  GLACIER_BLUE = '#81a1c1',
};

export async function parseJSONL(input, cb): Promise<void> {
  const file = await DataFile.fromLocalSource(input);

  // load 16MB chunks
  const sizeOf16MB = 16 * 1024 * 1024;
  const byteLength = file.byteLength;
  const decoder = new TextDecoder();
  const lineBreak = '\n'.charCodeAt(0);

  for (let offset = 0; offset <= byteLength; offset += sizeOf16MB) {
    const chunkEnd = Math.min(offset + sizeOf16MB, byteLength);
    const chunk = await file.loadData(offset, chunkEnd);
    const view = new DataView(chunk);
    let start = 0;
    for (let i = 0, n = chunk.byteLength; i < n; ++i) {
      if (view.getUint8(i) === lineBreak || offset + i === byteLength) {
        const statementBuffer = new Uint8Array(chunk, start, i - start);
        start = i + 1;

        const str = decoder.decode(statementBuffer);
        const json = JSON.parse(str);

        cb(json);
      }
    }

    if (start < chunk.byteLength) {
      offset -= chunk.byteLength - start;
    }
  }
}

export function createElementFromHTML(html: string): ChildNode {
  const template: HTMLTemplateElement = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

export const deepCopy = (inObject, keyBlackList?: Array<any>) => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  const isArray = Array.isArray(inObject);
  outObject = isArray ? [] : {}

  for (key in inObject) {
    if (!isArray && keyBlackList?.includes(key)) {
      // Object property should not be deep copied
      continue;
    }

    value = inObject[key];
    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopy(value, keyBlackList);
  }

  return outObject;
}
