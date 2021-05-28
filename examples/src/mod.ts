import { renderMenu } from './renderMenu';
import { bundledEdges } from './bundledEdges/mod';
import * as basic from './basic/mod';
import './HelpElements';

const examples = {
  basic,
  bundledEdges,
};

function getExample(examples: any, path: any) {
  let obj = examples;
  for (let i = 0, n = path.length; i < n; ++i) {
    if (Object.prototype.hasOwnProperty.call(obj, path[i])) {
      obj = obj[path[i]];
    } else {
      return null;
    }
  }

  if (typeof obj === 'function') {
    return obj;
  }

  return null;
}

function main(): void {
  const pathName = window.location.pathname;
  const pathComponents = pathName.split('/').filter(v => Boolean(v));
  // if the site is being served from github pages, remove the first component
  let basePath = '';
  if (window.location.hostname.indexOf('github.io') !== -1) {
      basePath = `/${pathComponents.shift()}`;
  }

  const example = getExample(examples, pathComponents);

  console.log(example);

  if (example) {
    example(document.body);
  } else {
    renderMenu(document.body, examples, pathComponents, basePath);
  }
}

main();
