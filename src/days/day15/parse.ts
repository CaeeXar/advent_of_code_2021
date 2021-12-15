export type RiskLevel = number[][];

export const parsePartOne = (input: string): RiskLevel => {
    return input.split("\n").map(d => d.split("").map(d => +d));
}