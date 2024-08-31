const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todoRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use('/todo',todoRoutes);

mongoose.connect(process.env.MONGODB_URI);

app.listen(port, () =>{
    console.log(`Server starting on ${port}`);
    
})