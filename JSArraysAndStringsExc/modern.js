/***
 * @param {String} text 
 */
function solve(text){
    text.replace('#', '');
    let arr = text.split(' ');
    let newArr = [];
    for(word of arr){
        if(word.length > 1 && word.startsWith('#')){
            newArr.push(word);
        }
    }
    for(word of newArr){
        let newWord = word.replace('#', '');
        console.log(newWord);
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');