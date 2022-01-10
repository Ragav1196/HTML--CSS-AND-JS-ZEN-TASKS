// CLASS FOR MOVIE
class Movie {
    constructor(Title, Studio, Rating = "PG"){
    this.Title = Title;
    this.Studio = Studio;
    this.Rating = Rating;
    }
}

const firstMovie = new Movie("Casino Royale", "Eon Productions", "PG");
const secondMovie = new Movie("Harry Potter", "WB Production", "PG");
const thirdMovie = new Movie("Resident Evil", "Umbrella Productions", "R");
const fourthMovie = new Movie("Free Guy", "Disney Productions", "PG");
const fifthMovie = new Movie("Joker", "WB Productions", "R");

let MoviesArray = [firstMovie, secondMovie, thirdMovie, fourthMovie, fifthMovie];

function getPG(MoviesArray) {
    MoviesArray.forEach((Movies) =>{    
        if(Movies.Rating == "PG"){
            console.log(Movies);
        }
    })
}
getPG(MoviesArray);