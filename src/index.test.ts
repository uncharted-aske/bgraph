import { bgraph, IGraph } from "./index";

const EDGES_SINGLE_NODE_CYCLE = [
  { _id: 'e-1', _label: 'AA', _in: 'n-1', _out: 'n-1', type: 'Sibling' },
];
const NODES_SINGLE = [
  { _id: 'n-1', _label: 'A', color: 'green', score: 0.54 },
];
const EDGES_CYCLIC_TRIANGLE = [
  { _id: 'AB', _out: 'A', _in: 'B', x_change: -1, y_change: -1 },
  { _id: 'BC', _out: 'B', _in: 'C', x_change: 2 , y_change: 0  },
  { _id: 'CA', _out: 'C', _in: 'A', x_change: -1, y_change: 1  },
];
const EDGES_TREE_TRIANGLE = [
  { _id: 'AB', _out: 'A', _in: 'B' },
  { _id: 'AC', _out: 'A', _in: 'C' },
];
const NODES_TRIANGLE = [
  { _id: 'A', _label: 'A', x: 0,  y: 0  },
  { _id: 'B', _label: 'B', x: -1, y: -1 },
  { _id: 'C', _label: 'C', x: 1,  y: -1 },
];

describe("tree triangle graph", () => {
  let G: IGraph;
  beforeEach(() => {
    G = bgraph.graph(
      NODES_TRIANGLE.map(d => Object.assign({}, d)), // Deep copy to avoid mutating data between tests
      EDGES_TREE_TRIANGLE.map(d => Object.assign({}, d))
    );
  });
  // SIMPLE TRAVERSAL
  test("retrieve all children", () => {
    let result = G.v('A').out().run();
    result = result.map(d => d.vertex._id);

    // TODO: Consider whether order should be maintained
    expect(result).toEqual(['C', 'B']);
  });
});

describe("cyclic triangle graph", () => {
  let G: IGraph;
  beforeEach(() => {
    G = bgraph.graph(
      NODES_TRIANGLE.map(d => Object.assign({}, d)), // Deep copy to avoid mutating data between tests
      EDGES_CYCLIC_TRIANGLE.map(d => Object.assign({}, d))
    );
  });
  // SIMPLE TRAVERSAL
  test("complete cycle", () => {
    let result = G.v('A').out().out().out().run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['A']);
  });
  // START/REPEAT
  test("repeat around cycle", () => {
    let result = G.v('A').start().out().repeat(2).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['A']);
  });
  // SUSPEND/UNSUSPEND
  test("suspend each visited node in cycle", () => {
    let result = G.v('A').start().suspend().out().repeat(2).filter(d => false).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['A', 'B', 'C']);
  });
  // TAKE
  test("take a single output", () => {
    let result = G.v('A').start().suspend().out().repeat(2).filter(d => false).take(1).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['A']);
  });
  // AS (ALIAS)/BACK
  test("alias the start node and then move back", () => {
    let result = G.v('A').as('start').out().back('start').run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['A']);
  });
  test("do not move back to a filtered alias", () => {
    let result = G.v('A').as('start').out().filter(d => false).back('start').run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual([]);
  });
});

describe("cyclic single node graph", () => {
  let G: IGraph;
  beforeEach(() => {
    G = bgraph.graph(
      NODES_SINGLE.map(d => Object.assign({}, d)), // Deep copy to avoid mutating data between tests
      EDGES_SINGLE_NODE_CYCLE.map(d => Object.assign({}, d))
    );
  });
  // VERTEX PIPE
  test("vertex: empty query", () => {
    let result = G.v().run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  test("vertex: label filter", () => {
    let result = G.v('B').run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual([]);
  });
  test("vertex: object filter passes", () => {
    let result = G.v({ color: 'green' }).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  test("vertex: object filter fails", () => {
    let result = G.v({ color: 'red' }).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual([]);
  });
  // FILTER PIPE
  test("filter: object filter passes", () => {
  let result = G.v().filter({ color: 'green' }).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  test("filter: object filter fails", () => {
    let result = G.v().filter({ color: 'red' }).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual([]);
  });
  test("filter: function filter fails", () => {
    let result = G.v().filter(d => d.score > 0.90 ).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual([]);
  });
  test("filter: function filter passes", () => {
    let result = G.v().filter(d => d.score > 0.30 ).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  // SIMPLE TRAVERSAL OUT PIPE
  test("out: loop", () => {
    let result = G.v().out().run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  test("out: label filter passes", () => {
    let result = G.v().out('AA').run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  test("out: label filter fails", () => {
    let result = G.v().out('BB').run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual([]);
  });
  test("out: object filter passes", () => {
    let result = G.v().out({type: 'Sibling'}).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  test("out: object filter fails", () => {
    let result = G.v().out({type: 'Parent'}).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual([]);
  });
  // SIMPLE TRAVERSAL IN PIPE
  test("in: loop", () => {
    let result = G.v().in().run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  test("in: label filter passes", () => {
    let result = G.v().out('AA').run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  test("in: label filter fails", () => {
    let result = G.v().out('BB').run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual([]);
  });
  test("in: object filter passes", () => {
    let result = G.v().in({type: 'Sibling'}).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual(['n-1']);
  });
  test("in: object filter fails", () => {
    let result = G.v().in({type: 'Parent'}).run();
    result = result.map(d => d.vertex._id);

    expect(result).toEqual([]);
  });
  // PROPERTY PIPE
  test("property: get colors as result", () => {
    let result = G.v().property('color').run();
    result = result.map(d => d.result);

    expect(result).toEqual(['green']);
  });
  // FAUX PIPE
  test("throws on unrecognized pipetype", () => {
    expect(() => G.v().thisPipeDoesNotExist().run()).toThrow();
  });
});
