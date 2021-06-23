const express = require('express') 
const app = express() 

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
mongoose.connect(`${process.env.MONGODB_URL}` ,
    { useNewUrlParser: true, useUnifiedTopology: true }   
);

 //seedUserData();
 
app.get('/', 
 function (req, res) { 
  res.send('Hello World') 
})

app.get('/books',getBooks)

app.post('/book',createBook)

app.put('/book/:book_idx',updateBook )

app.delete('/book/:book_idx',deleteBook )
 app.listen(PORT,() =>{
     console.log(`Server stand on ${PORT}`);
 } )
