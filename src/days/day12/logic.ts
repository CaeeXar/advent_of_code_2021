import _ from "lodash";

const getAdjacentNodes = (caves: string[][], from: string) => {
    return caves.filter(path => from === path[0]).map(d => d[1])
        .concat(caves.filter(path => from === path[1]).map(d => d[0]));
}

// deapth field search
const _dfs = (caves: string[][], curr: string, currPath: string[], paths: string[][]) => {
    // visit only big caves or unvisited
    if (curr.toLowerCase() === curr && currPath.filter(cave => cave === curr).length >= 1) return;

    // if we're at the end, return the current path
    if (curr === "end") {
        paths.push(currPath.concat("end"));
        return;
    }

    // continue dfs for adjacent caves
    getAdjacentNodes(caves, curr).forEach(cave => _dfs(caves, cave, currPath.concat(curr), paths));
};

const dfs = (caves: string[][]) => {
    let paths: string[][] = [], x = _dfs(caves, "start", [], paths);
    return paths;
};

export const getDistinctPaths = (caves: string[][]) => {
    let paths = dfs(caves);
    return paths.length;
}