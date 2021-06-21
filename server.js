const express = require('express') // require the express package
const app = express() // initialize your express app instance

const mongoose=require('mongoose')

require('dotenv').config()
const getBooks = require('./controller/book.controller')
const PORT = process.env.PORT
const cors =require('cors');
app.use(cors())

mongoose.connect('mongodb://localhost:27017/book',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})

app.get('/books',getBooks)

 app.listen(PORT,() =>{
     console.log(`Server stand on ${PORT}`);
 } )
