document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let productButtons = document.querySelectorAll('.product .add-product');

   let allProducts = {};
   let outputArea = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');
   
   for(let button of productButtons){
      button.addEventListener('click', (e) => {
            let productElement = e.target.closest('.product');
            let name = productElement.querySelector('.product-title').textContent;
            let price = Number(productElement.querySelector('.product-line-price').textContent);
            

            if(!allProducts.hasOwnProperty(e.target)){
               allProducts[name] = 0;
            } 
            allProducts[name]+= price;

            outputArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      })
   }
   checkoutButton.addEventListener('click', () => {
      let productNames = Object.keys(allProducts);
      let totalPrice = Object.values(allProducts).reduce((a, b) => a + b, 0);

      outputArea.value += `You bought ${productNames.join(', ')} for ${totalPrice.toFixed(2)}.\n`;

      productButtons.forEach(btn => btn.disabled = true);
      checkoutButton.disabled = true;
   });
}
