async function userData(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data[0]);
    } catch(error) {
        console.log("Error:", error);
    }
}
userData();