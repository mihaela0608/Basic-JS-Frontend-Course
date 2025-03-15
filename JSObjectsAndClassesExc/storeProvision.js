/**
 * 
 * @param {Array} arrInStock 
 * @param {Array} arrForDelivery 
 */
function storeProvision(arrInStock, arrForDelivery) {
    let store = {};

    for (let i = 0; i < arrInStock.length; i += 2) {
        let product = arrInStock[i];
        let quantity = Number(arrInStock[i + 1]);
        store[product] = quantity;
    }

    for (let i = 0; i < arrForDelivery.length; i += 2) {
        let product = arrForDelivery[i];
        let quantity = Number(arrForDelivery[i + 1]);

        if (store.hasOwnProperty(product)) {
            store[product] += quantity; 
        } else {
            store[product] = quantity; 
        }
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Bananas', '9', 'Beer', '5', 'CocaCola', '3']
);
