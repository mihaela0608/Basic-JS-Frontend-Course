/***
 * @param {String} text 
 */
function censor(text, word){
    let newText = text.replaceAll(word, (('*').repeat(word.length)));
    console.log(newText);
}
censor('A small sentence with some words','small');