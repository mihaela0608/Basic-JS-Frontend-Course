/***
 * @param {Array} phoneBook 
 */
function phoneBook(phoneBook){
    let book = {};
    for(let info of phoneBook){
        let name = info.split(' ')[0];
        let phone = info.split(' ')[1];
        book[name] = phone;
    }
    for(let key in book){
        console.log(`${key} -> ${book[key]}`);
    }
}