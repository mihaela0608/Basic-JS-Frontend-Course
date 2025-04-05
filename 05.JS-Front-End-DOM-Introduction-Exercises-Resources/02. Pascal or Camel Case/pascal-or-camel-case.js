function solve() {
    let text = document.getElementById('text').value;
    let command = document.getElementById('naming-convention').value;

    text = text.toLowerCase();
    let textArr = text.split(' ');

    
    if (command !== 'Camel Case' && command !== 'Pascal Case') {
      document.getElementById('result').textContent = 'Error!';
      return;
    }

    let result = '';

    for (let i = 0; i < textArr.length; i++) {
      let word = textArr[i];
      if (i === 0 && command === 'Camel Case') {
          result += word;
      } else {
          result += word.charAt(0).toUpperCase() + word.slice(1);
      }
  }


    document.getElementById('result').textContent = result;

    
}