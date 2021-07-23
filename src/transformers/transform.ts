import { IBGraph } from "..";
import { Step } from "../query/query";

export interface IQueryTransformer {
  priority: number,
  fun: IQueryTransformerFunction,
}

export type IQueryTransformerFunction = (...args: any[]) => Step[];

// Transformer Utility Functions
function checkValidRepeat(program: Step[]) {
  let numOfOpenRepeatBlocks = 0;
  // let numOfRepeatPipes = 0;
  for (const step of program) {
    if (step[0] === 'start') {
      numOfOpenRepeatBlocks++;
    } else if (step[0] === 'repeat') {
      numOfOpenRepeatBlocks--;
    }

    if (numOfOpenRepeatBlocks < 0) {
      throw new Error('Must begin a repeat block with a `start` step');
    }
  }
  if (numOfOpenRepeatBlocks !== 0) {
    throw new Error('Must close all start steps with a `repeat`');
  }
}

function getRepeatRange(program: Step[]) {
  let startIdx = null;
  let endIdx = null;

  for (let i = 0; i < program.length; i++) {
    const step = program[i];
    if (startIdx == null && step[0] === 'start') {
       startIdx = i;
    } else if (startIdx != null && step[0] === 'repeat') {
      endIdx = i;
      break;
    }
  }
  if (startIdx != null && endIdx != null) {
    return [startIdx, endIdx];
  } else {
    // No repeat found
    return null;
  }
}

export interface ITransform {
  T: Array<IQueryTransformer>
  addTransformer: (fun: IQueryTransformerFunction, priority: number) => void | false,
  transform: (program: Step[]) => Step[],
}

export function hydrate(bgraph: IBGraph): void {
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
  };

  bgraph.transform = function(program: Step[]): Step[] {
    return bgraph.T.reduce(function(acc, transformer: IQueryTransformer) {
      return transformer.fun(acc);
    }, program);
  };

  // Register initial transformers

  // Register start/repeat transformer
  bgraph.addTransformer(function(program: Step[]) {
    checkValidRepeat(program);

    let range;
    while(range = getRepeatRange(program)) {
      const repeatStep = program[range[1]];
      const numOfRepeats = repeatStep[1][0];

      // Remove start/repeat pipes
      program.splice(range[0], 1);
      program.splice(range[1]-1, 1);

      // Slice sub-program between start/repeat pipes
      const subProgram = program.slice(range[0],range[1]-1);

      // Pre-allocate repeated sub-program array to reduce memory alloc, copy
      // and defragmentation costs associated with multiple push/splice operations
      const repeatedSubProgram = new Array(subProgram.length*numOfRepeats);
      for (let j = 0; j < repeatedSubProgram.length; j++) {
        repeatedSubProgram[j] = subProgram[j % subProgram.length];
      }

      program = program
        .slice(0, range[1]-1)
        .concat(repeatedSubProgram)
        .concat(program.slice(range[1]-1));
    }
    return program;
  }, 1000);
}
