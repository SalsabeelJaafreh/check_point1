var users=require('/Users/rbk29/Desktop/check_point1/rest-api/models/users.js')
var User=require('/Users/rbk29/Desktop/check_point1/back-end/models/User.js')


exports.alluser = function (req, res) {

	var userarray=JSON.parse(users)
	for(var i=0;i<userarray.length;i++){

		console.log(userarray[i].name)
		console.log(userarray[i].email)
        res.send(userarray[i])
        //OR return userarray

	}

};

exports.createuser = function (req, res) {
var info=req.body;
var newuser= new User({
	name:req.body.name,
	email:req.body.email
})
newuser.save(function(err,user){
	if(err){res.send(500)}
		else{
			var a=JSON.parse(user)
			res.send(a)
		}
})

}


exports.retrieveuser=function(req,res){
	User.find({id:_req.body.id},function(err,user){
		if(err){console.log("not found!")
			res.send(500)}
			else{
				var a=JSON.parse(user)
				res.send(a)
			}
	})

}


exports.updateuser=function(req,res){
User.find({id:_req.body.id},function(err,user){
	if(err){console.log("not found!")
			res.send(500)}
		else if(req.body.name!==null){
			name:req.body.name;
           
		}
		else{
			email:req.body.email;
		}
	
}

exports.deleteuser=function(req,res){
	User.remove({id:_req.body.id},function(err,user){
	if(err){console.log("not exist!")
			res.send(500)}
		else{
			var a=JSON.parse(user)
			res.send(a)
		}
	
}



