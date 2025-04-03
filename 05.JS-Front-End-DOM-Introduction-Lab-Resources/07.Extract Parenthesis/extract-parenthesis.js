function extract(content) {
    let paragraph = document.getElementById(content).innerText;

    let matches = paragraph.match(/\((.*?)\)/g);

    if (matches) {
        let result = matches.map(item => item.slice(1, -1)).join('; ');
        return result;
    }

    return '';
}
