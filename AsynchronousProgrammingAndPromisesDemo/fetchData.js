function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            } 
            return res.json();
        })
        .then(data => {
            for (let i = 0; i < 5; i++) {
                console.log(data[i].title); // Извеждаме само заглавията
              }
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

fetchData();