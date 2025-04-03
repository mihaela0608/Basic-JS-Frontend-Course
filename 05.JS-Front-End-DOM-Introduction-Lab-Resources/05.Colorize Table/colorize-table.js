function colorize() {
    let rows = document.querySelectorAll('tbody tr');

    for (let i = 0; i < rows.length; i++) {
        if ((i + 1) % 2 === 0) {
            rows[i].style.backgroundColor = "Teal";
        }
    }
}