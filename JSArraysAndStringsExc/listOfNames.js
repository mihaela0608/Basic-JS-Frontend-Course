/***
 * @param {Array} names 
 */
function solve(names){
    names = names.sort((a, b) => a.localeCompare(b));
    let i = 1;
    for(personName of names){
        console.log(`${i}.${personName}`);
        i++;
    }
}
solve(["John","Bob","christina","Ema"]);