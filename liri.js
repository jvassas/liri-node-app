// Set environment variables
require("dotenv").config();

// Importing API keys
var keys = require("./keys.js");

// Spotify npm package
var Spotify = require("node-spotify-api");

// Axios npm package
var axios = require("axios");

// Moment npm package
var moment = require("moment");

// FS package
var fs = require("fs");

// Initialize Spotify API using id and secret
var spotify = new Spotify(keys.spotify);

// Getting artist names
var getArtist = function(artist) {
    return artist.name;
};

// Runs spotify search
var getSpotify = function(songName) {
    if (songName === undefined) {
        songName = "I'm real";
    }

    spotify.search(
        {
            type: "track",
            query: songName
        },
        function(err, data) {
            if (err) {
                console.log("Error: " + err);
                return;
            }
            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("Artist(s): " + songs[i].artists.map(getArtist));
                console.log("Song Name: " + songs[i].name);
                console.log("Preview song: " + songs[i].preview_url);
                console.log("Album: " + songs[i].album.name);
                console.log("-----------------------------------------");
            }

        }
    );
};

// Getting bands in towns
var getMyBands = function(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function(response) {
            var jsonData = response.data;

            if (!jsonData.length) {
                console.log("No results found for " + artist);
                return;
            }

            console.log("Upcoming concerts for " + artist + ":");

            for (var i =0; i < jsonData.length; i++) {
                var show = jsonData[i];

                // Prints data about each concert
                console.log( 
                    show.venue.city +
                    "," +
                    (show.venue.region || show.venue.country) +
                    " at " +
                    show.venue.name +
                    " " +
                    moment(show.datetime).format("MM/DD/YYYY")
                );
            }
        }
    );
};

// Movie search function
var getMovie = function(movieName) {
    if (movieName === undefined) {
        movieName = "The Dark Knight";
    }

    var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    axios.get(urlHit).then(
        function(response) {
            var jsonData = response.data;

            console.log("Title: " + jsonData.Title);
            console.log("Year: " +jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);

        }
    );
};

// Function for running search referring to random.txt file
var defaultSearch = function() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        console.log(data);

        var dataArr = data.split(",");

        if (dataArr.length == 2) {
            choice(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1) {
            choice(dataArr[0]);
        }
    });
};


// Function command execution
var choice = function(caseData, functionData) {
    switch(caseData) {
        case "concert-this":
            getMyBands(functionData);
            break;
        case "spotify-this-song":
            getSpotify(functionData);
            break;
        case "movie-this":
            getMovie(functionData);
            break;
        case "do-what-it-says":
            defaultSearch();
            break;
        default:
            console.log("LIRI is not sure what you meant");
    }
};

// Function that executes correct function
var run = function(argOne, argTwo) {
    choice(argOne, argTwo);
};

// Main process
run(process.argv[2], process.argv.slice(3).join(" "));