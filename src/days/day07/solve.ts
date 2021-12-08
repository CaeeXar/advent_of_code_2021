import { calculateFuel } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    let positions = parsePartOne(input);
    return calculateFuel(positions);
};

export const solvePartTwo = (input: string) => { };
