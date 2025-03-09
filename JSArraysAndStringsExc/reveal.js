/***
 * @param {String} text 
 */
function solve(words, text){
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');
    for(let i = 0; i < textArr.length; i++){
        for(forReplace of wordsArr){
            if(textArr[i] == '*'.repeat(forReplace.length)){
                textArr[i] = forReplace;
            }
        }
    }
    console.log(textArr.join(' '));
}
solve('great','softuni is ***** place for learning new programming languages');