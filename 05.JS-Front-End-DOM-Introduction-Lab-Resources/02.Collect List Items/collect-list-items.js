function extractText() {
    let items = document.querySelectorAll('#items li');
    let textArray = Array.from(items).map(li => li.innerText);
    let result = document.getElementById('result');
    result.value = textArray.join('\n');
}