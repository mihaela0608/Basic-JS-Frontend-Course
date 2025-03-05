/***
 * @param {String} text 
 */
function solve(text, word){
    text = text.split(' ');
    let count = 0;
    for(wordFromText of text){
        if(word === wordFromText){
            count++;
        }
    }
    console.log(count);
}
solve('This is a word and it also is a sentence','is');