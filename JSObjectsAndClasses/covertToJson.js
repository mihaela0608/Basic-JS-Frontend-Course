function convert(...info){
    //a first name, last name, hair colo
    let person = {name : info[0], lastName : info[1], hairColor: info[2]};
    return JSON.stringify(person);
}