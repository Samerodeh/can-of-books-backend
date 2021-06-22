'use strict'



const { request } = require('express');
const {userModel} = require('../models/user')


const getBooks = (req,res) => {
   
    const { email } = req.query;

 userModel.findOne({email: email}, (error,user) => {
  if (error) {
      res.send(error);
  } else {
      res.json(user)
  }

 });
}

const createBook =(req,res)=>{

    const {userEmail,bookName,discBook,bookStatus} = req.body
console.log(req.body);
    userModel.findOne({email: userEmail},(error,userData)=>{
if(error){
    res.send(error)
}else{
  userData.books.push({
     name: bookName ,
     description: discBook,
     status :bookStatus
  })
  userData.save()
   res.json(userData)
}

    })
}

const updatebook =(req,res)=>{

    const bookIndex = req.params.book_idx
  const {userEmail, bookName,discBook,bookStatus} =req.body;
  userModel.findOne({email :userEmail},(error,userData)=>{
if (error) {
    res.send(error)
}else{
    userData.books.splice(bookIndex,1,{
        name: bookName ,
        description: discBook,
        status :bookStatus})
        userData.save();
        res.send(userData)
    }
  })
}

const deleteBook =(req,res) =>{
 console.log(req.params);
          const bookIndex = req.params.book_idx;
          console.log('iiiiiiiiiiiiiiii',bookIndex);
          const {userEmail}= req.query
          console.log(req.query);
userModel.findOne({email: userEmail},(error,userData) =>{
if (error) {
    res.send(error)
} else {
    userData.books.splice(bookIndex,1)
    userData.save();
    res.send(userData)

}

})

}

module.exports = {
    getBooks,
    createBook,
    updatebook,
    deleteBook

};