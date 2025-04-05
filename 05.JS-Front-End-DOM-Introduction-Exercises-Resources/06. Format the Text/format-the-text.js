function solve() {
  let text = document.getElementById('input').value;
  let sentences = text.split('.').filter(s => s.trim().length > 0); 
  let result = '';

  for (let i = 0; i < sentences.length; i++) {
    result += sentences[i].trim() + '.';

    if ((i + 1) % 3 === 0) {
      let p = document.createElement('p');
      p.textContent = result.trim();
      document.getElementById('output').appendChild(p);
      result = '';
    }
  }

  if (result !== '') {
    let p = document.createElement('p');
    p.textContent = result.trim();
    document.getElementById('output').appendChild(p);
  }
}
