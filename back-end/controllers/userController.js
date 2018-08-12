var user=require('../models/User.js')
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, res) {
  // TODO
  User.find({name:name},function(error,user){
  	 if(error){
	console.log("error")
	res.send(500)
         }

         else{
         	console.log(user)
         	res.send(user)
         }
  })
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  User.find({name:name},function(error,user){
  	if(error){console.log("user not found!")}
  		else{

  			user.email=newEmail

  		       user.save(function(err,user){
				if(err){
					console.log(error);
					res.send(err)
				}else{
					console.log('user updated!')
				}
			}
		}
	})


};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  //u mean by read "retrieve" ,right!?
   User.find({},function(error,users){
  	if(error){console.log("database ie empty")}
  		else{
  			res.send(users)
  		}

  		






};
