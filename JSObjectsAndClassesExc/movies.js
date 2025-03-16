function solve(arr) {
    class Movie {
        constructor(name) {
            this.name = name;
        }
    }

    let movies = {};

    for (let command of arr) {
        if (command.startsWith('addMovie ')) {
            let movieName = command.slice(9); 
            movies[movieName] = new Movie(movieName);
        } else if (command.includes(' directedBy ')) {
            let [movieName, director] = command.split(' directedBy ');
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName].director = director;
            }
        } else if (command.includes(' onDate ')) {
            let [movieName, date] = command.split(' onDate ');
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName].date = date;
            }
        }
    }

    let moviesArr = Object.values(movies).filter(m => m.director && m.date);

    for (let movie of moviesArr) {
        console.log(JSON.stringify(movie));
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis FordCoppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
