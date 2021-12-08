import _ from "lodash";

export const calculateFuel = (positions: number[]): number => {
    let max: number = _.max(positions) || 0,
        cheapest = Number.MAX_VALUE;

    for (let i = 1; i <= max; i++) {
        let sum = _.sum(positions.map(d => Math.abs(d - i)));
        if (sum < cheapest) cheapest = sum;
    }

    return cheapest;
};