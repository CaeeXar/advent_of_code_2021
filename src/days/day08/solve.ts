import { decode } from "./logic";
import { parsePartTwo } from "./parse";

export const solvePartOne = (input: string) => {
    let parse = parsePartTwo(input);
    return decode(parse.after);
};

export const solvePartTwo = (input: string) => { };
