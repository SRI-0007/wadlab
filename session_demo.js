// Prints message in terminal when file starts running
console.log("FILE STARTED");

// Import Express framework (used to create server and routes)
const express = require('express');

// Import express-session (used to manage user sessions on server)
const session = require('express-session');

// Import cookie-parser (used to read and set cookies in browser)
const cookieParser = require('cookie-parser');

// Create an Express application
const app = express();

// Middleware to parse cookies from incoming requests(📄 Raw text = “unorganized information”🧠 Parser = “brain that understands it”📦 Output = “organized usable data”)
app.use(cookieParser());

// Middleware to handle sessions (stores user data on server)
app.use(session({
    secret: 'secret-key', // used to sign the session ID cookie (security purpose)
    resave: false,        // avoids saving session if nothing changed
    saveUninitialized: true // saves new sessions even if not modified
}));

// Home route (default page)
app.get('/', (req, res) => {
    res.send("Welcome to Home Page"); // sends response to browser
});

// Login route
// Creates session + sets cookie
app.get('/login', (req, res) => {
    req.session.user = "Srihitha"; // store user in session (server-side)
    res.cookie("username", "Srihitha"); // store username in cookie (client-side)
    res.send("User logged in"); // response sent to browser
});

// Profile route
// Reads session data
app.get('/profile', (req, res) => {
    if (req.session.user) { // check if user exists in session
        res.send("Welcome " + req.session.user); // show username 
    } else {
        res.send("Please login first"); // if no session, ask to login
    }
});

// Logout route
// Destroys session + clears cookie
app.get('/logout', (req, res) => {
    req.session.destroy(); // remove session from server
    res.clearCookie("username"); // delete cookie from browser
    res.send("Logged out"); // confirmation message
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000"); // server start message
});