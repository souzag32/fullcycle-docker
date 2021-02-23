const { NOTIMP } = require('dns');
const express = require('express');
const { connect } = require('http2');
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb',
};
const mysql = require('mysql')

const executeQuery = (mysql, callback) => {

    const connection = mysql.createConnection(config)

    const sqlInsert = `INSERT INTO people(name) values('Wesley')`
    connection.query(sqlInsert)

    const select = `SELECT * FROM people WHERE name = 'Wesley'`
    
   connection.query(select, function (err, results){
        let nomes = ''
        results && results.forEach(people => {
            nomes += `<div>${people.name}</div>`
        })
        return callback(nomes)
    })
    
    connection.end()
}


app.get('/', (req, res) => {
        executeQuery(mysql, (result) => {
            res.send(`<h1>Full Cycle</h1>${result}`)
        })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})