function subtract() {
    const first = Number(document.getElementById('firstNumber').value);
    const second = Number(document.getElementById('secondNumber').value);

    let result = first - second;

    document.getElementById('result').textContent = result;
}