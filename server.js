const express = require('express') // require the express package
const app = express() // initialize your express app instance

const mongoose=require('mongoose')

require('dotenv').config()

const { 
    getBooks , 
    createBook,
     updateBook,
    deleteBook} = require('./controller/book.controller')
const PORT = process.env.PORT
const cors =require('cors');
app.use(cors())

app.use(express.json());

const {seedUserData}=require('./models/user')
mongoose.connect('mongodb://localhost:27017/book',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// seedUserData();
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})

app.get('/books',getBooks)

app.post('/book',createBook)

app.put('/book/:book_idx',updateBook )

app.delete('/book/:book_idx',deleteBook )
 app.listen(PORT,() =>{
     console.log(`Server stand on ${PORT}`);
 } )
