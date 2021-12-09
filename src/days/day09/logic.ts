import _ from "lodash";

export const getRisk = (heightmap: string[][]) => {
    let sum = 0;

    for (let y = 0; y < heightmap.length; y++) {
        for (let x = 0; x < heightmap[y].length; x++) {
            let up = 10, down = 10, right = 10, left = 10, value = +heightmap[y][x];

            if (y > 0) up = +heightmap[y - 1][x];
            if (y < heightmap.length - 1) down = +heightmap[y + 1][x];
            if (x > 0) left = +heightmap[y][x - 1];
            if (x < heightmap[y].length - 1) right = +heightmap[y][x + 1];

            if (value < up && value < down && value < left && value < right) sum += value + 1;
        }
    }

    return sum;
};