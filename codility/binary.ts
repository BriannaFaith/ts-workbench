// Find longest sequence of zeros in binary represntation of an integer
function solution(N: number): number {
    const binaryRep = N.toString(2)
    const binaryGaps = binaryRep.replace(/^0+|0+$/g, '').split('1');
    if (binaryGaps.length === 0 ){
        return 0;
    }
    const longestGap = Math.max(...binaryGaps.map(gap => gap.length));
    return longestGap;

}

const N = 1041;
console.log(solution(N));