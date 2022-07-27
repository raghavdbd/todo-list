// Including express, as framework. (ejs)
const express = require('express');

// to join to paths, inbuild don't need to include.
const path = require('path');

// Using port no. 8000 to run our server, unique
const port = 8000;

// Started the server.
const app = express();

// It's a middleware, given by express to decrypt form data.
app.use(express.urlencoded());

// setting up JS, CSS, images.
app.use(express.static('asserts'));

// Setting the route.
app.use('/', require('./routes'));

// setting templete engine. 
app.set('view engine', 'ejs');

// setting path for the templetes (Views attribute of MVC).
app.set('views', path.join(__dirname, 'views'));

// listening on port 8000 on browser with our server.
app.listen(port, function(err) {

    if(err) {
        console.log(`Error in starting the server ${err}`);
    }

    console.log(`The server is running successfully on port no. ${port}`);
});