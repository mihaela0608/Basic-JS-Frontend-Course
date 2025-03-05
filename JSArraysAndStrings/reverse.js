/***
 * @param {Array} arr
 */

function reverseArr(n, arr){
    let newArr=(arr.slice(0, n));
    console.log(newArr.reverse().join(' '));
}
reverseArr(3, [10, 20, 30, 40, 50]);