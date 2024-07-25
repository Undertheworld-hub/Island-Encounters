const mongoose = require('mongoose');

const islandSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    position: { x: Number, y: Number },
    customization: { type: String, default: '' } // JSON string for customization details
});

module.exports = mongoose.model('Island', islandSchema);
