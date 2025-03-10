function orders(product, quantity){
/**
 * coffee - 1.50

· water - 1.00

· coke - 1.40

· snacks - 2.00
 */
    let price = 0;
    if(product == 'coffee'){
        price = 1.50;
    } else if(product == 'water'){
        price = 1.00;
    } else if(product == 'coke'){
        price = 1.40;
    } else if(product == 'snacks'){
        price = 2.00;
    }
    console.log((price * quantity).toFixed(2));
}
orders('snacks', 3);