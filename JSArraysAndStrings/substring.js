/***
 * @param {String} word 
 */
function substringSolve(word, num1, num2){
    let newString = word.substring(num1, num1+num2);
    console.log(newString);
}
substringSolve('ASentence', 1, 8);