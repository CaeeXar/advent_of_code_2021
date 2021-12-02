import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    let parsedInput = parsePartOne(input);
    let counter = 0;
    for (var i = 0; i < parsedInput.length - 1; i++) {
        if (parsedInput[i] < parsedInput[i + 1]) counter++;
    }
    return counter;
};

export const solvePartTwo = (input: string) => { };
