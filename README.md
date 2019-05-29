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

To seach for information about a song, the user must run the app followed by a command.  The image displayed shows the results. 

    node liri spotify-this-song 'lost ones' 

![spotify-this-song](https://user-images.githubusercontent.com/37188809/58589391-c7e10f00-822f-11e9-864d-21aeb12498c0.png)

When a user would like to search for information about a certain movie, a similar command would be typed. 

    node liri movie-this 'the dark knight'
    node liri movie-this 'forrest gump' 
    ...
    
![movie-this](https://user-images.githubusercontent.com/37188809/58589670-679e9d00-8230-11e9-9150-f775f4de7d81.png)
    
If a user wanted to find concert information for a specified artist, the user would enter:
    
    node liri concert-this 'the chainsmokers'
    
![concert-this](https://user-images.githubusercontent.com/37188809/58589899-f6131e80-8230-11e9-84ed-84edf159a3b2.png)

A default song which is saved in the random.txt would be searched by the command:

    node liri do-what-it-says
 
 ![do-what-it-says](https://user-images.githubusercontent.com/37188809/58590178-87829080-8231-11e9-93b1-9a0a1725b512.png)

Finally, if the user does not input anything and simply runs the app, a default message would appear.

    node liri
    
![node-liri](https://user-images.githubusercontent.com/37188809/58590308-d2040d00-8231-11e9-8aed-5c8ea83e546f.png)

   
    

