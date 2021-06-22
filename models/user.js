'use stric'
;
const mongoose = require('mongoose');

const bookSchema= require('./book');

const userSchema= new mongoose.Schema({
 email: {type: String},
 books: [bookSchema]    
});

const userModel = mongoose.model('users',userSchema);

const seedUserData = () => {
    const newUser = new userModel({
       
           email: 'osama.alali89@gmail.com',
           books:[
             {name: 'HTML5', description:'The Best Book HTML', status: true },
                                   
             {name: 'JAVA' , description:'The Best Book JAVA', status: false },
             {name: 'CSS' , description:'The Best Book CSS', status: true },
           ]
    });

console.log(newUser);
try{
  newUser.save();
}catch(error){
    console.log(error);

}

}
// seedUserData();
module.exports = {
  userModel,
  seedUserData};