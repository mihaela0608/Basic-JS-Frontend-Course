function loadRepos() {
    const username = document.getElementById('username').value;
    const list = document.getElementById('repos');
    list.innerHTML = ''; 

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(repo => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = repo.html_url;
                a.textContent = repo.full_name;
                a.target = '_blank';
                li.appendChild(a);
                list.appendChild(li);
            });
        })
        .catch(error => {
            const li = document.createElement('li');
            li.textContent = error.message;
            list.appendChild(li);
        });
}
