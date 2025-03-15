function convert(json){
    let person = JSON.parse(json);
    let entries = Object.entries(person);

    for(let entry of entries){
        console.log(`${entry[0]}: ${entry[1]}`)
    }
}