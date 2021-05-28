import { IBGraph } from "..";

export interface IAlias {
  addAlias: (newname: string, oldname: string, defaultArgs: string[]) => void,
}

export function hydrate(bgraph: IBGraph) {
  bgraph.addAlias = function(newname: string, oldname: string, defaultArgs: string[]): void {
    defaultArgs = defaultArgs || [];
    bgraph.addTransformer(function(program) {
      return program.map(function(step) {
        if(step[0] != newname) return step;
        return [oldname, bgraph.extend(step[1], defaultArgs)];
      });
    }, 100);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    bgraph.addPipetype(newname, function() {});
  };
}
