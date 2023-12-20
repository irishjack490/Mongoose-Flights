//Import Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const Flight = require('./models/flight');
const path = require('path');
const port = process.env.PORT || 3000;

//Import Router
const router = require('./controllers/flights');

//create app object + set up view engine
const app = express();//call express function

//view engine - ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/flights/:id', (req, res) => {
    const flightsId = req.params.id;
    // Retrieve resource details based on resourceId
    // Render or send the details in the response
    res.send(`Showing details for flights ${flightsId}`);
});

require('dotenv').config();