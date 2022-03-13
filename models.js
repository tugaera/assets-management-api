const mongoose = require('mongoose');

/**
 * 
 */
const placeModel = mongoose.Schema({
    type: {
        type: String,
        required: '{PATH} is required!'
    },
}, {
    timestamps: true
});

/**
 * 
 */
const personModel = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    }
}, {
    timestamps: true
});

module.exports = {
    Person: mongoose.model('Person', personModel),
    Place: mongoose.model('Place', placeModel)
};