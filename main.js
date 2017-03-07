'use strict' //makes javascript run a stricter error processor 

const sqlite3 = require('sqlite3').verbose() //helps with debugging

const db = new sqlite3.Database('example.sqlite') //takes the name in '' thus making the file
// console.log(db) //also needed to make file along with^^

const dropEmployees = () => {
    db.run(`DROP TABLE employees`)
}
// dropEmployees()

db.run("CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT, salary NUMBER(6,2))")

// db.run(`INSERT INTO employees VALUES (1, "Ashley", "Irwin", 5)`)
