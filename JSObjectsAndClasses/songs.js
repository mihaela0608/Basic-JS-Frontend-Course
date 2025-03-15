/**
 * @param {Array} arr 
 */
function solve(arr) {
    
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = Number(arr[0]); // Convert the first element to a number
    let songArray = []; // Use an array instead of an object

    for (let i = 1; i <= songs; i++) {
        let songInfo = arr[i].split('_');
        let typeList = songInfo[0];
        let songName = songInfo[1];
        let songTime = songInfo[2];
        
        let song = new Song(typeList, songName, songTime);
        songArray.push(song); // Store song objects in an array
    }

    let filterType = arr[arr.length - 1];

    if (filterType === 'all') {
        for (let song of songArray) {
            console.log(song.name);
        }
    } else {
        for (let song of songArray) {
            if (song.typeList === filterType) {
                console.log(song.name);
            }
        }
    }
}

// Test case
solve([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'all']);
