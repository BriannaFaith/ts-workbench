// Given an array of integers,
// calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction(6digits) on a new line with  places after the decimal.

function plusMinus(arr: number[]): void {
  let positive: number = 0;
  let negative: number = 0;
  let zero: number = 0;
  let total: number = arr.length;

  arr.forEach((num) => {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  );

  console.log((positive / total).toFixed(6));
  console.log((negative / total).toFixed(6));
  console.log((zero / total).toFixed(6));
}

let numbers: number[] = [-4, 3, -9, 0, 4, 1];
plusMinus(numbers);