function solve() {
   let rows = document.querySelectorAll('table tbody tr');
   let search = document.getElementById('searchField').value.toLowerCase();

   for(let row of rows){
      row.classList.remove('select');
   }

   for(let row of rows){
      let values = row.querySelectorAll(' td');
      for(let value of values){
         if(value.textContent.toLowerCase().includes(search) && search !== ''){
            row.classList.add('select');
         }
      }
   }
   
}