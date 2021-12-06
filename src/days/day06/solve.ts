import { simulate } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    let parsed = parsePartOne(input);
    return simulate(parsed).length;
};

export const solvePartTwo = (input: string) => { };
