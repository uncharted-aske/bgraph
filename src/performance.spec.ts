import { performance } from 'perf_hooks';
import { bgraph, IGraph } from "./index";

function buildCyclicGraph(n: number) {
  const nodes = new Array(n).fill(undefined).map((_, i) => {
    return {_id: i};
  });
  const edges = new Array(n).fill(undefined).map((_, i) => {
    return {
      _id: i,
      _out: i,
      _in: i,
    };
  });
  return [nodes, edges];
}

describe('traversal performance tests', () => {
  let G: IGraph;
  let t0: number;
  let t1: number;
  describe.each([
    {n: 100,   expected: 5},
    {n: 1000,  expected: 50},
    {n: 10000, expected: 5000},
  ])('traversing $n times from single node cyclic graph', ({n, expected}) => {
    test(`should finish in ${expected}ms`, () => {
      G = bgraph.graph(...buildCyclicGraph(1));
      t0 = performance.now();
      // TODO: Resolve type errors on interface
      // @ts-expect-error: Ignore interface type errors
      G.v().start().out().repeat(n).run();
      t1 = performance.now();
      expect(t1 - t0).toBeLessThanOrEqual(expected);
    });
  });

  describe.each([
    {n: 10000, expected: 50},
    {n: 100000, expected: 500},
    {n: 1000000, expected: 5000},
  ])('traversing a single time from an $n node cyclic graph', ({n, expected}) => {
    test(`should finish in ${expected}ms`, () => {
      G = bgraph.graph(...buildCyclicGraph(n));
      t0 = performance.now();
      // TODO: Resolve type errors on interface
      // @ts-expect-error: Ignore interface type errors
      G.v().out().run();
      t1 = performance.now();
      expect(t1 - t0).toBeLessThanOrEqual(expected);
    });
  });
});
