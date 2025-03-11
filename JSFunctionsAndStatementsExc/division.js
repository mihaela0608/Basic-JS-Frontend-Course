function solve(number){
    let numbers = [1];
    for(let i = 2; i<= number/2; i++){
        if(number % i == 0){
            numbers.push(i);
        }
    }
    let sum = 0;
    numbers.forEach(n => sum+=n);
    if(number == sum){
        console.log('We have a perfect number!');
    } else{
        console.log("It's not so perfect.");
    }
}
solve(6);
solve(28);
solve(1236498);