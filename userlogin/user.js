const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const db = mysql.createConnection({
    h"
    user: "siteshkr",
    password: "1234",
    database: "userlogin",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.message);
    } else {
        console.log("Connected to the database.");
    }
});

app.use(express.json());

app.post("/submit", (req, res) => {
    const { username, password } = req.body;
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error("Error:", err.message);
            res.status(500).send("Server error");
        } else {
            console.log("User registered:", result);
            res.status(200).send("Registration successful");
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
