function factorial(num1, num2){
    let firstFac = 1;
    for(let i = num1; i>=1; i--){
        firstFac*=i; 
    }
    let secondFac = 1;
    for(let i = num2; i>=1; i--){
        secondFac*=i; 
    }
    console.log((firstFac / secondFac).toFixed(2));
}
factorial(5, 2);