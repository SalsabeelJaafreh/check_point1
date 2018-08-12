// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var exampleUser = {
  name: 'Taka',
  email: 'taka@taka.com'
};

var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/user';


var userSchema =mongoose.Schema({

 name:String,
 email:String
});



var User=mongoose.model('User',userSchema);


module.exports = User ;

