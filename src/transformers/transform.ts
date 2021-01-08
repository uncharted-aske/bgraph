import { IBGraph } from "..";
import { Step } from "../query/query";

export interface IQueryTransformer {
  priority: number,
  fun: IQueryTransformerFunction,
};

export type IQueryTransformerFunction = (...args: any[]) => Step[];

export interface ITransform {
  T: Array<IQueryTransformer>
  addTransformer: (fun: IQueryTransformerFunction, priority: number) => void | false,
  transform: (program: Step[]) => Step[],
}

export function hydrate(bgraph: IBGraph) {
  bgraph.addTransformer = function(fun: IQueryTransformerFunction, priority: number): void | false {
    if(typeof fun != 'function') {
      return bgraph.error('Invalid transformer function');
    }

    // TODO: Inefficient if many registered transforms consider using binary search
    let i;
    for(i = 0; i < bgraph.T.length; i++) {
      if(priority > bgraph.T[i].priority) {
        break;
      }
    }

    bgraph.T.splice(i, 0, {priority: priority, fun: fun});
  }

  bgraph.transform = function(program: Step[]): Step[] {
    return bgraph.T.reduce(function(acc, transformer: IQueryTransformer) {
      return transformer.fun(acc);
    }, program);
  }
}
