/***
 * @param {String} word
 * @param {String} text  
 */
function solve(word, text){
    let textForSearch = text.toLocaleLowerCase();
    let search = word.toLocaleLowerCase();
    let arr = textForSearch.split(' ');
    let found = false;
    for(wordInText of arr){
        if(search === wordInText){
            found = true;
            break;
        }
    }
    if(found){
        console.log(word);
    } else{
        console.log(`${word} not found!`);
    }
}
solve('jAvascript','JavaScript is the best programming language');