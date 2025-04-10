document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let arr = document.querySelector("input[type='text']").value.split(', ');
   let content = document.getElementById('content');

   for(let text of arr){
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = text;
      div.appendChild(p);
      content.appendChild(div);
   }
}