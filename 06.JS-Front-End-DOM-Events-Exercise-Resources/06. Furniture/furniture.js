document.addEventListener('DOMContentLoaded', solve);

function solve() {
  let generateButton = document.querySelector('#input input[type="submit"]');
  generateButton.addEventListener('click', generate);

  let buyBtn = document.querySelector('#shop input[type="submit"]');
  buyBtn.addEventListener('click', buy);


  function buy(e){
    e.preventDefault();
    
    const rows = Array.from(document.querySelectorAll('#shop tbody tr'));
  
    const boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
  
    for (let row of rows) {
      const checkBox = row.querySelector('input[type="checkbox"]');
  
      if (checkBox && checkBox.checked) {
        const name = row.children[1].textContent.trim();
        const price = Number(row.children[2].textContent);
        const decFactor = Number(row.children[3].textContent);
  
        boughtItems.push(name);
        totalPrice += price;
        totalDecFactor += decFactor;
      }
    }
  
    const output = document.querySelector('#shop textarea');
    output.value = `Bought furniture: ${boughtItems.join(', ')}\n`;
    output.value += `Total price: ${totalPrice}\n`;
    output.value += `Average decoration factor: ${boughtItems.length ? (totalDecFactor / boughtItems.length) : 0}`;
  }

  function generate(e){
    e.preventDefault();
    let inputs = document.querySelector('#input textarea').value;
    inputs = JSON.parse(inputs);

    let table = document.querySelector('#shop tbody');


    for(let input of inputs){
      let row = document.createElement('tr');
      let tdImg = td();
      let img = document.createElement('img');
      img.src = input.img;
      tdImg.appendChild(img);
      row.appendChild(tdImg);

      row.appendChild(tdWithP(input.name));
      row.appendChild(tdWithP(input.price));
      row.appendChild(tdWithP(input.decFactor));

      let tdLast = td();
      let inputCheck = document.createElement('input');
      inputCheck.type = 'checkbox';
      tdLast.appendChild(inputCheck);
      row.appendChild(tdLast);

      table.appendChild(row);

    }

    function tdWithP(content){
      let tdP = td();
      let p = document.createElement('p');
      p.textContent = content;
      tdP.appendChild(p);
      return tdP;
    }

    function td(){
      let tdE = document.createElement('td');
      return tdE;
    }
  }
}