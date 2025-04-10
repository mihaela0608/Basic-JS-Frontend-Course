function deleteByEmail() {
    let forSearch = document.querySelector("input[name='email']").value;
    let rows = document.querySelectorAll('tbody tr');

    if(forSearch == ''){
        return;
    }

    let deleted = false;

    for(let row of rows){
        let email = row.cells[1].textContent;

        if(email.includes(forSearch)){
            row.remove();
            deleted = true;
        }
    }

    document.querySelector("input[name='email']").value = '';

    if(deleted){
        document.getElementById('result').textContent = 'Deleted.';
    } else{
        document.getElementById('result').textContent = 'Not found.';
    }
}
