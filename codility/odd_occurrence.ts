// Find the value that occurs in odd number of elements
function solutionQuiz(A: number[]): number{
    let result: number = 0;
    // loop through each number and perform KOR operation
    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }
    return result;
}

const B = [9, 3, 9, 3, 9, 7, 9];
console.log(solutionQuiz(B));