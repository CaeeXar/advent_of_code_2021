import { calcCirections, calcCirectionsWithRobo } from "./logic";

export const solvePartOne = (input: string) => {
    return calcCirections(input);
};

export const solvePartTwo = (input: string) => {
    return calcCirectionsWithRobo(input);
};
