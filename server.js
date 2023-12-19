//All const
const logger = require('morgan');
const express = require('express');
const Flight = require('.models/flight,');
const app = express();
const port = process.env.PORT || 3000;

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database', { useNewUrlParser: true, useUnifiedTopology: true });


//Set up middleware and routes
app.use(express.urlencoded({extended: true}));
app.use('/flights', flightRoutes);
//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });