import { solvePartOne } from "./solve";

describe("Part one", () => {
    test("solves the example", () => {
        const input = `\
199
200
208
210
200
207
240
269
260
263
`;

        const result = solvePartOne(input);

        expect(result).toEqual(7);
    });
});