// routes/flights.js
const express = require('express');
const router = express.Router();
const Flight = require('../models/flight'); 

router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);

// Index route - View all flights
// router.get('/', async (req, res) => {
//   try {
//     const flights = await Flight.find();
//     res.render('flights/index', { flights });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;
