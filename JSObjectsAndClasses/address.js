/***
 * @param {Array} arr 
 */
function addressInfo(arr){
    let addressBook = {};
    for(let info of arr){
        let name = info.split(':')[0];
        let address = info.split(':')[1];
        addressBook[name] = address;
    }
    let sortedEntries = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sortedEntries) {
        console.log(`${key} -> ${value}`);
    }
}
addressInfo(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);