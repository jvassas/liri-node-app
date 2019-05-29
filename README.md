### liri-node-app

Node Assignment 

# Description
This application uses the command line where users can search for information about certain songs, movies and concerts. LIRI stands for Language Interpretation and Recognition Interface. The application works by taking in parameters and sending back data to the user. This information is retrieved using the axios node package to request data from the Bands in Town, OMDB, and Spotify API's.

# Dependencies
    -axios: Used to pull data from the OMDB and Bands in Town API's. ('Installation: npm i axios')
    -dotenv: Used to spotify credentials private. ('Installation: npm i dotenv')
    -moment: Used to format the date of events. ('Installation: npm i moment')
    -node-spotify-app: Used to retrieve song information from the Spotify API. (Installation: 'npm i node-spotify-api')

# Demo:

To seach for information about a song, the user must run the app followed by a command. The command line input would look like this: "node liri spotify-this-song 'lost ones'" 

    The image displayed shows the results.

![spotify-this-song](https://user-images.githubusercontent.com/37188809/58589391-c7e10f00-822f-11e9-864d-21aeb12498c0.png)

When a user would like to search for information about a certain movie, a similar command would be typed: "node liri movie-this 'the dark knight'"
    
    The image displayed shows the results for that movie, and some others which were searched.
    
    

