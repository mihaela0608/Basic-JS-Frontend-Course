document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let email = document.getElementById('email');
    email.addEventListener('change', () => {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let value = email.value;
        if (!pattern.test(value)) {
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }
    });
}
