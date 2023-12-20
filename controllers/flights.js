const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create
};

function newFlight (req, res){
    res.render('flights/new', {errorMsg: ''});
}
async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose arrays
    newFlight.push(req.body);
    try {
      // Save any changes made to the flight doc
      await flight.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/flight/${flight._id}`);
}