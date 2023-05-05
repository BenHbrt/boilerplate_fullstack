const sqlite = require('sqlite3').verbose();
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

console.log("Opening database...")
const db = new sqlite.Database('./backend/database.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.error(err)
})

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:3000'}))

// <<GET>> ALL DEMO NAMES
app.get("/api/demoNames", (req, res) => {
    sql = "SELECT * FROM demo"
    try {
        db.all(sql, [], (err, rows) => {
            if (err) res.json({
                status: 300,
                success: false,
                error: err
            });
            if (rows.length < 1) return res.json({
                status: 300,
                success: false,
                error: "No match"
            });
            return res.json({
                status: 200,
                success: true,
                data: rows
            })
        })
    } catch (err) {
        return res.json({
            status: 400,
            success: false
        })
    }
})

app.listen(3001)