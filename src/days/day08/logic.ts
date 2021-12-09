import _ from "lodash"

export const decode = (input: string[]) => {
    let count = 0;

    input.forEach(line => {
        let temp = line.split(" ");
        temp.forEach(d => {
            count += d.length === 2 ? 1 : 0;
            count += d.length === 3 ? 1 : 0;
            count += d.length === 4 ? 1 : 0;
            count += d.length === 7 ? 1 : 0;
        });
    });

    return count;
}