// require dotenv and use it 
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000

//Bring in username and password from the .env file 
const mongoUsername = process.env.MONGODB_USERNAME
const mongoPassword = process.env.MONGODB_PASSWORD

//Mongo connection string 
const mongoURI = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.s0fu6kb.mongodb.net/?retryWrites=true&w=majority`


//Setups route for browser - defines what will be shown in the browser
app.get('/', (req, res) =>{
    res.send('Hello, this is your Express Server!') // see in the browser
})

// Setup the server to listen to the port - logs out to terminal that is listening when it starts for the first time
// Because of nodemon and it restarting each time we make a change it should log this out again 
app.listen(port, () => {
 console.log(`Express backend server is running on localhost:${port}`); // sent to the terminal
});

// Connect to Mongo use Mongoose
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    // Success
    .then(() =>{
        console.log('Connected to MongoDB Atlas');
    })
    // Fail / Error
    .catch((err) =>{
        console.error('Error connecting to MongoDB:', err)
    })