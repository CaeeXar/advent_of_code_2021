import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    let data = parsePartOne(input);
    const l = data[0].length;
    let epsilon = "", gamma = "", ones = 0;


    for (let i = 0; i < l; i++) {
        data.forEach(e => {
            if (e[i] == '1') ones++;
        });

        if (ones >= data.length / 2) {
            gamma += "1";
            epsilon += "0";
        }
        else {
            gamma += "0";
            epsilon += "1";
        }

        ones = 0;
    }

    return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

export const solvePartTwo = (input: string) => { };
