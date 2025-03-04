function fruit(fruit, weight, price){
    let money = (weight / 1000) * price;
    let result = `I need ${'$' + money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`
    console.log(result);
}
