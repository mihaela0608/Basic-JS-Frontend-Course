function editElement(p, match, replace) {
    let newString = p.innerText.replaceAll(match, replace);
    p.innerText = newString;
}