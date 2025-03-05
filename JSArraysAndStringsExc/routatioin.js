/***
 * @param {Array} arr 
 */
function solve(arr, number){
    for(let i = 1; i <= number; i++){
        let num = arr.shift();
        arr.push(num);
    }
    console.log(arr.join(' '));
}
solve([32, 21, 61, 1], 4);