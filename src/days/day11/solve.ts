import { calculateFlashes } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return calculateFlashes(parsePartOne(input), 100);
};

export const solvePartTwo = (input: string) => { };
