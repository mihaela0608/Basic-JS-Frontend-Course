/***
 * @param {Array} arr
 */
function solve(arr){
    let odd=0;
    let even=0;
    for(number of arr){
        if(number % 2 == 0){
            even+=number;
        } else{
            odd+=number;
        }
    }
    console.log(even-odd);
}
solve([1,2,3,4,5,6]);