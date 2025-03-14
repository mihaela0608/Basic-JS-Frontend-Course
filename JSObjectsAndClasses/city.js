/***
 * @param {Object} cityInput 
 */
function solve(cityInput){
    let entries = Object.entries(cityInput);
    for(let [key, value] of entries){
        console.log(`${key} -> ${value}`)
    }
}