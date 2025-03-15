/***
 * @param {Array} arr 
 */
function towns(arr){
    let townArr = [];
    for(let townInfo of arr){
        let info = townInfo.split(' | ');
        let townName = info[0];
        let townLatitude = Number(info[1]).toFixed(2);
        let townLongitude = Number(info[2]).toFixed(2);
        let town = {town: townName, latitude: townLatitude, longitude: townLongitude};
        townArr.push(town);
    }
    for(let town of townArr){
        console.log(town);
    }
}
towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625']);