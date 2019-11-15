const express = require ('express');

const app = express();


const port = 3000;

//donut routes

app.get('/', (req, res) => {
    res.send('Hello World')
    });


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

