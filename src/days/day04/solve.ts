import _ from "lodash";
import { calcSum, getBingoTable } from "./logic";
import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    return calcSum(getBingoTable(parsePartOne(input)));
};

export const solvePartTwo = (input: string) => { };
