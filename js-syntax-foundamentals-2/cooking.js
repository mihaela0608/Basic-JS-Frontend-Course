function cook(number, op1, op2, op3, op4, op5){
    
   let arr=[op1, op2, op3, op4, op5];
   let num=Number(number);
   const operationsMap = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8,
   };
    arr.forEach((operation) => {
    number = operationsMap[operation](number);
    console.log(number);
    });
}