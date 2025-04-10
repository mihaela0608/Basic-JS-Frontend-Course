
function solve() {
    let button = document.querySelector("input[type='submit']");

    button.addEventListener('click', (e) => {
        e.preventDefault();
        addItem();
    });
    
    function addItem(){
        let newText = document.getElementById('newItemText').value;
        let newValue = document.getElementById('newItemValue').value;

        if(newText != '' && newValue != ''){
            let newItem = document.createElement('option');
            newItem.value = newValue;
            newItem.textContent = newText;
    
            let select = document.getElementById('menu');
            select.appendChild(newItem);
    
            document.getElementById('newItemText').value = '';
            document.getElementById('newItemValue').value = '';
        }
        
    }

   
}
document.addEventListener('DOMContentLoaded', solve);
