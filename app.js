// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express");
const morgan = require("morgan");
const articles = require("./data/articles.json");
const projects = require("./data/projects.json");


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));


// ROUTES
// Start defining your routes here:
// home
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/home.html");
});

// blog
app.get("/blog", (req, res) =>{
    res.sendFile(__dirname + "/views/blog.html");
});

// projects content
app.get("/api/projects", (req, res) => {
    res.json(projects);
});

// article content
app.get("/api/articles", (req, res) => {
    res.json(articles);
});

// 404 error page
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
})

// START THE SERVER
// Make your Express server listen on port 5005:

// Define port number the server will listen on
const PORT = 5005;

// 1. Start the server and listen for incoming requests on the defined port
// 2. Log a message to the console when the server is successfully running
app.listen(PORT, () => {
    console.log("Server is listening on port 5005");
});
