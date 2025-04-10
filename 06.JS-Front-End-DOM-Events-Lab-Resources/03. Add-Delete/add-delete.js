function addItem() {
       
        let item = document.getElementById('newItemText').value;
        if (item.trim() === '') return;
        let newItem = document.createElement('li');
        newItem.textContent = item;
        let href = document.createElement('a');
        href.href = '#';
        href.textContent = '[Delete]';
        href.addEventListener('click', function (e) {
            e.preventDefault();    
            newItem.remove();      
        });        newItem.appendChild(href);
        document.getElementById('items').appendChild(newItem);



        document.getElementById('newItemText').value = '';

        
}
    

