import { parsePartOne } from "./parse";

describe("Part one", () => {
    test("parses the example", () => {
        const input = `EE00D40C823060`;
        const result = parsePartOne(input);
        expect(result).toEqual('11101110000000001101010000001100100000100011000001100000');
    });
});