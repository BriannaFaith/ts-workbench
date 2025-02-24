// Rotate an array to the right by a given number of steps.
function solutionTest(A: number[], K: number): number[] {
    if (A.length === 0){
        return A;
    }
    if (K === 0){
        return A;
    }
    K = K % A.length;
    const part1 = A.slice(0, A.length - K);
    const part2 = A.slice(A.length - K);
    return part2.concat(part1);

}

const A = [1, 2, 3, 4];
const K = 4;
console.log(solutionTest(A, K));