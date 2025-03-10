function solve(num){
    let arr = String(num).split('');
    let oddSum = 0;
    let evenSum = 0;
    for(number of arr){
        number = Number(number);
        if(number % 2 == 0){
            evenSum+=number;
        } else{
            oddSum+=number;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(1000435);