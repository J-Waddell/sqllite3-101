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
// populateEmployees()

// db.get(`SELECT * FROM employees`, (err, row) => {
//     console.log(row)
// })

//db.all returns an array of results from the sql query
// db.all(`SELECT * FROM employees ORDER BY UPPER(first)ASC`, (err, allRows) => {    
//     allRows.forEach(( {id, first, last, gender, salary} ) => {
//     console.log(`${id} ${first} ${last} Gender:${gender}, Salary:${salary}`)
//     })

// })

db.all(`SELECT * FROM employees ORDER BY salary ASC WHERE employees salary 50000`, (err, allRows) => {
    allRows.forEach(( {first, last, salary} ) => {
        console.log(`${first} ${last} Salary:${salary}`)
    })
})

//better for larger data structures 
// console.log(new Date().getMilliseconds())
// db.each(`SELECT * FROM employees`, (err, {id, first, last, gender, salary}) => {
//     console.log(`${id} ${first} ${last} Gender:${gender}, Salary:${salary}`)
// })

