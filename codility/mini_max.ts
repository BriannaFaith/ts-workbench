// Given five positive integers,
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr: number[]): void {
    arr.sort((a, b) => a - b);

    let minSum: number = arr.slice(0, 4).reduce((a, b) => a + b);

    let maxSum: number = arr.slice(1).reduce((a, b) => a + b);
    console.log(minSum, maxSum);
}

let digits: number[] = [1, 2, 3, 4, 5];
miniMaxSum(digits);
