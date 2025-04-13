function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commitsList = document.getElementById('commits');

    commitsList.innerHTML = '';

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} (Not Found)`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(commit => {
                const li = document.createElement('li');
                li.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                commitsList.appendChild(li);
            });
        })
        .catch(error => {
            const li = document.createElement('li');
            li.textContent = error.message;
            commitsList.appendChild(li);
        });
}
