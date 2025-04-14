function postDemo(){
    const newPost = {
        title: "My New Post",
        body: "This is the content of my new post",
        userId: 1
      };

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
      })
        .then(response => response.json())
        .then(data => {
          console.log("Post created:", data);
        })
        .catch(error => {
          console.log("Error:", error);
        });
}


postDemo();