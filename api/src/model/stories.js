const mongoose = require('mongoose');

const Stories = mongoose.model('Stories', {
    title : {
        type: String,
        required: true        
        },
    description: {
        type: String,
        required: true
    },
    img: { 
        type: String,
        required: true
    }
});

module.exports = Stories;