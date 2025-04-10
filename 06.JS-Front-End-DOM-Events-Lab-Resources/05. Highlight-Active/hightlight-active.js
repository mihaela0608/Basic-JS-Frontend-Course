document.addEventListener('DOMContentLoaded', focused);

function focused() {
    let inputs= document.querySelectorAll('input');

    for(let input of inputs){
        input.addEventListener('focus', (e) =>{
            e.target.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        });
    }
}
