const express = require('express');
const router = express.Router();
const Voter = require('../voterlogin/voter');

router.post('/register', async (req, res) => {
    try {
        const voter = new Voter(req.body);
        await voter.save();
        res.status(200).send('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
