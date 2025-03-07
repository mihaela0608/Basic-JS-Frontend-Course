/***
 * @param {Array} arr 
 */
function sorting(arr){
    arr.sort((a, b) => a - b);
    let newArr = []; 
    let iter = arr.length
    for(let i = 0; i< iter; i++){
        let num = 0;
        if(i % 2 == 0){
            num = arr.shift();
        } else if(i % 2 !=0){
            num = arr.pop();
        }
        newArr.push(num);
    }
    console.log(newArr);
}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);