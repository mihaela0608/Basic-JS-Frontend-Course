function sumTable() {
    let table = document.querySelector('table');
    let rows = table.querySelectorAll('tbody tr');

    let sum = 0;

    for(let i = 1; i < rows.length-1; i++){
        let nuber = Number(rows[i].cells[1].innerText);
        sum+=nuber;
    }

    document.getElementById('sum').innerText = sum;


}