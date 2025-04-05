function solve() {
   const searchText = document.getElementById('searchText').value.toLowerCase();
   const towns = document.querySelectorAll('#towns li');
   let matches = 0;

   for(let town of towns){
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   }

   for(let town of towns){
      if(town.textContent.toLowerCase().includes(searchText) && searchText !== ''){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}