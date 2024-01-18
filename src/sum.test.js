import { partitionOddEven} from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("mixed numbers", () => {
    expect(partitionOddEven([20,5, 8, 3,9,11])).toEqual([[5, 3, 9 ,11], [20,8]]);
});

test("only odds", () => {
    expect(partitionOddEven([1,7,9,13,5])).toEqual([[1,7,9,13,5],[]]);
});


test("only evens", () => {
    expect(partitionOddEven([2, 6, 10, 8])).toEqual([[],[2, 6, 10, 8]]);
});


test("empty array", () => {
    expect(partitionOddEven([])).toEqual([[],[]]);
});
