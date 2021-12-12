import _ from "lodash";

let tracker = [..._.range(0, 10, 0).map(d => _.range(0, 10, 0))]

const _flash = (data: number[][], x: number, y: number): number => {
    if (y < 0 || y >= data.length) return 0;
    if (x < 0 || x >= data[y].length) return 0;
    if (tracker[y][x] !== 0) return 0;

    data[y][x]++;
    if (data[y][x] >= 10) {
        let flash = 1;
        data[y][x] = 0;
        tracker[y][x] = 1;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                flash += _flash(data, x + j, y + i);
            }
        }

        return flash;
    }

    return 0;
}

const flash = (data: number[][]): number => {
    let flashesPerStep = 0;

    for (let y = 0; y < data.length; y++) {
        for (let x = 0; x < data[y].length; x++) {
            flashesPerStep += _flash(data, x, y);
        }
    }

    return flashesPerStep;
}

export const calculateFlashes = (data: number[][], steps: number) => {
    let clone = _.cloneDeep(data);
    let flashes = 0;

    for (let i = 0; i < steps; i++) {
        flashes += flash(clone);
        tracker = [..._.range(0, 10, 0).map(d => _.range(0, 10, 0))]
    }

    return flashes;
}