'use strict' //makes javascript run a stricter error processor 

const sqlite3 = require('sqlite3').verbose() //helps with debugging

const db = new sqlite3.Database('example.sqlite') //takes the name in '' thus making the file
// console.log(db) //also needed to make file along with^^

const dropEmployees = () => {
    db.run(`DROP TABLE employees`)
}
// dropEmployees()

//creates employee table if it does not exist
//will not execute if the table exists
db.run("CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT, salary INT, gender TEXT)")



const populateEmployees = () => {

    const { list } = require('./employees.json')
    
    list.forEach(each => {
        db.run(`INSERT INTO employees VALUES (
            ${each.id},
            "${each.firstName}",
            "${each.lastName}",
            ${each.salary},
            "${each.gender}"
        )`)
    })
}
populateEmployees()