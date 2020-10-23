const express = require("express");
const mongoose = require('mongoose');
const app = express();

//routes

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');





//DN config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db)
.then(()=> console.log("MongoDB coonnected"))
.catch(err=> console.log(err));

//use Router
app.use('/api/users', users);
app.use('/api/profile',profile);





app.get('/',(req,res) => res.send("hello"));

const port = process.env.PORT || 5000 ;

app.listen(port ,()=> console.log(`Server running at port ${port}`));
