var job=require('../models/Job.js')
// Create a new job in the database
exports.createJob = function (req, res) {
  // TODO
  var info=req.body;
  var jobinstance=new Job({
   company:info.company,
   title:info.titile,
   description:info.description,
   postedDate:info.postedDate,
   salary:info.salary
  })
  jobinstance.save();
  res.send(jobinstance)



};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (req,res) {
  // TODO
  Job.find({salary: req.body.salary>$50,000},function(error,result){
   if(error){
	console.log("error")
	res.send(500)
         }

         else{
         	console.log(result)
         	res.send(result)
         }


  })
}



