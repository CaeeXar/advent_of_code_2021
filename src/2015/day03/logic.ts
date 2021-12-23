import _ from "lodash";

const getNewPosition = (dir: string, x: number, y: number): number[] => {
    let newX = 0, newY = 0;

    switch (dir) {
        case "^":
            newY = y - 1;
            break;
        case "v":
            newY = y + 1;
            break;
        case ">":
            newX = x + 1;
            break;
        case "<":
            newX = x - 1;
            break;
    }

    return [newX, newY];
};

const key = (x: number, y: number) => x + "," + y;

export const calcCirections = (input: string) => {
    let posX = 0, posY = 0, houses: { [key: string]: number } = { "0,0": 1 };
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "^":
                posY -= 1;
                break;
            case "v":
                posY += 1;
                break;
            case ">":
                posX += 1;
                break;
            case "<":
                posX -= 1;
                break;
        }
        let key = posX + "," + posY;
        houses[key] = (!!houses[key] ? houses[key] : 0) + 1;
    }

    return Object.keys(houses).length;
};

export const calcCirectionsWithRobo = (input: string) => {
    let xS = 0, yS = 0, xR = 0, yR = 0,
        houses: { [key: string]: number } = { "0,0": 1 };

    for (let i = 0; i < input.length; i++) {
        let v = input[i];
        if (i % 2 === 1) {
            [xS, yS] = getNewPosition(v, xS, yS);
            houses[key(xS, yS)] = (!!houses[key(xS, yS)] ? houses[key(xS, yS)] : 0) + 1;
        } else {
            [xR, yR] = getNewPosition(v, xR, yR);
            houses[key(xR, yR)] = (!!houses[key(xR, yR)] ? houses[key(xR, yR)] : 0) + 1;
        }
    }

    console.log(houses)
    return Object.keys(houses).length;
};