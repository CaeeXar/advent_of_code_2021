import _ from "lodash";

export const simulate = (initialData: number[], days: number = 80): number[] => {
    let fishes = _.cloneDeep(initialData);

    for (let i = 0; i < days; i++) {
        let newFishes = 0;

        for (let fish = 0; fish < fishes.length; fish++) {
            let daysUntilNew = fishes[fish];

            if (daysUntilNew > 0) {
                fishes[fish]--;
            }
            else {
                fishes[fish] = 6;
                newFishes++;
            }
        }

        for (let fish = 0; fish < newFishes; fish++) {
            fishes.push(8);
        }

        newFishes = 0;
    }

    return fishes;
};