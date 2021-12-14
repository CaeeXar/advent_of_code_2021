import _ from "lodash";
import { PolymerRules, PolymerTemplate } from "./parse";

const runThrough = (polymer: string, rules: PolymerRules) => {
    let newPolymer = "";

    for (let i = 0; i < polymer.length - 1; i++) {
        let subElement = polymer[i] + polymer[i + 1],
            toInsert = (!!rules[subElement]) ? rules[subElement] : "";
        newPolymer += (polymer[i] + toInsert);
    }

    return newPolymer + polymer[polymer.length - 1];
};

const calculateQuantity = (polymer: string) => {
    let map = _.countBy(polymer), max = _.max(_.values(map)) || 0, min = _.min(_.values(map)) || 0;
    return max - min;
}

export const calculate = (pt: PolymerTemplate, steps: number = 10) => {
    let polymer = _.clone(pt.polymer), rules = _.clone(pt.rules);
    for (let i = 0; i < steps; i++) polymer = runThrough(polymer, rules);
    return calculateQuantity(polymer);
}