function solve(num1, num2, operator){
    let func = {
        'multiply': (num1, num2) => num1 * num2,
        'divide': (num1, num2) => num1 / num2,
        'add': (num1, num2) => num1 + num2,
        'subtract': (num1, num2) => num1 - num2
    }
    console.log(func[operator](num1, num2));
}
solve(5,5,'multiply');