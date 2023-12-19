const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create
};

function newFlight (req, res){
    res.render('flights/new', {errorMsg: ''});
}