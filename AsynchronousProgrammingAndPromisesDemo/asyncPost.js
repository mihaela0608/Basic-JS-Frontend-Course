async function createPost() {
    const newPost = {
      title: "My New Async Post",
      body: "This is the content of my new post using async/await",
      userId: 1
    };
  
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
      });
  
      let data = await response.json();
      console.log("Post created:", data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  createPost();
  