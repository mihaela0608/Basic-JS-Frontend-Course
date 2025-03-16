/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {
    let wordsForSearch = arr[0].split(' ');
    let wordsCount = {};

    for (let word of wordsForSearch) {
        wordsCount[word] = 0;
    }

    for (let i = 1; i < arr.length; i++) {
        let word = arr[i];
        if (wordsCount.hasOwnProperty(word)) {
            wordsCount[word]++;
        }
    }

    let sortedWords = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
