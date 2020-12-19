const express = require('express');
const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const fs = require("fs");
const app = express();
const port = 3000;

app.use(cors());

var connection = mysql.createConnection({
    host     : 'sql9.freemysqlhosting.net',
    user     : 'sql9382969',
    password : 'xnzgDr4bg8',
    database : 'sql9382969'
});

app.use('/', express.static('public'));

const budget = JSON.parse(fs.readFileSync('./budget-data.json', 'utf8'));

app.get('/hello' , (req, res) => {
    res.send('Hello World!');
});

app.get('/budget' , (req, res) => {
    res.json(budget);
});

app.listen(port ,() => {
    console.log('Example app listening at http://localhost:${port}');
});