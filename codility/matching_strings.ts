// There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of input strings.
// Return an array of the results.

function matchingStrings(strings: string[], queries: string[]): number []{
    let results: number[] = [];
    
    queries.forEach(query => {
        let count = strings.filter(str => str === query).length;
        results.push(count);
    });
    return results;

}

let strings: string[] = ["ab", "cd", "ef", "gh", "ij"];
let queries: string[] = ["cd", "def", "ef", "gh", "ij", "jk", "kl"];
console.log(matchingStrings(strings, queries));