function solve(...nums){
    //Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.
    function sum(num1, num2){
        return num1 + num2;
    }
    function subtract(num1, num2){
        return num1 - num2;
    }
    console.log(subtract(sum(nums[0], nums[1]), nums[2]));
}
solve(2, 3, 2);