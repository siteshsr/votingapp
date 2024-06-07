const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    voterName: String,
    fatherName: String,
    dob: Date,
    voterAddress: String,
    email: String
});

module.exports = mongoose.model('Voter', voterSchema);
