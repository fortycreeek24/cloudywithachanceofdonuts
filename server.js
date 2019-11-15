const express = require ('express');

const app = express();

//connect to database use mysql.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: 'mcsp02donuts' 
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

const port = 3000;

//donut routes

app.get('/', (req, res) => {
    res.send('Hello World')
});

//use my sqljs to run sql queries to get data
//res.send that data

//CREATE
//ADD A NEW DONUT
app.post('/donuts',(req,res) =>{
    //gets an object via req body
    res.send('placeholder')
});

// GET ALL DONUTS
app.get('/donuts', (req,res) =>{
    res.send('no donuts yet, my b');
});

//GET SINGLE DONUT RECORD
app.get('/donuts/:id', (req,res) =>{
    res.send('make single donut')
});

//DELETE DONUT
app.delete('/donuts/:id', (req, res)=>{
    //req.body
    res.send('sell a single donut')
});

//UPDATE A DONUT
app.patch('/donuts/:id',(req,res) =>{
    //req.body
    res.send('made new donut')
});

//listen on port



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

