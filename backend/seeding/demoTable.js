// Import sqlite3 and data
const sqlite3 = require('sqlite3').verbose();
const data = require('./data/demoData')

// Set table name
const table = "demo"

// Open the database
console.log("Opening database...")
let db = new sqlite3.Database('../database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
});

// Make sure each of the following actions happen one after the other
db.serialize()

// Delete the table if it already exists
db.run(`DROP table IF EXISTS ${table}`)

// Create the table
console.log(`Creating ${table} table...`)
db.run(`CREATE TABLE ${table} ( id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100))`)
console.log("Table created.")

//Seed data
console.log(`Seeding ${table} table...`)
data.forEach((item) => {
    dataArray = []
    Object.keys(item).forEach((key) => {
        dataArray.push(item[key])
    })
    const sql = `INSERT INTO ${table} (Name) VALUES (?)`
    db.run(sql, dataArray, (err) => {
    if (err) {
        return console.error(err.message)
        }
    })
})
console.log("Seeding completed.")

// Close the database
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Database connection closed.');
})