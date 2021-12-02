import { parsePartOne } from "./parse";

export const solvePartOne = (input: string) => {
    const parsedInput = parsePartOne(input);
    let x = 0, y = 0, axis: string[] = [], distance: number[] = [];
    parsedInput.forEach(element => {
        let data = element.split(" ");
        axis.push(data[0]);
        distance.push(+data[1]);
    });

    for (let i = 0; i < axis.length; i++) {
        if (axis[i] == "forward") {
            x += distance[i];
        } else {
            if (axis[i] == "down") {
                y += distance[i];
            } else {
                y -= distance[i];
            }
        }
    }

    return x * y;
};

export const solvePartTwo = (input: string) => { };
