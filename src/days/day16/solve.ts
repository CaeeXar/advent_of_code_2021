import { sumBy } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return sumBy("versionId", parsePartOne(input));
};

export const solvePartTwo = (input: string) => { };
