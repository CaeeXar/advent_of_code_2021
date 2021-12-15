import { calculateDistance } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return calculateDistance(parsePartOne(input));
};

export const solvePartTwo = (input: string) => { };
