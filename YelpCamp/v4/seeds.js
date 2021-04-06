var mongoose 	= require("mongoose");
var Campground  = require("./models/campground");
var Comment 	= require("./models/comment");
 
var data = [
	{name: "Cloud's Rest",
	 image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=150",
	 description: "blah blah blah"
	},
		{name: "Hyper Rest",
	 image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=150",
	 description: "blah blah blah"
	},
		{name: "Blaze Rest",
	 image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=150",
	 description: "blah blah blah"  
	}
	
]

function seedDB(){
	//Remove all campgrounds
	Campground.deleteMany({}, function(err){ 
		//removed has changed to deleteMany
	if(err){
		console.log(err);
	}
	console.log("Removed campgrounds!");
		//add a few comments 
	data.forEach(function(seed){
		Campground.create(seed, function(err, campground){
			if(err){
				console.log(err);
			} else{
				console.log("added a campground");
				//create a comment
			Comment.create(
				{
				text: "This place is greate, but I wish there was internet...",
				author: "Homer"
			}, function(err, comment){
				if(err){
					console.log(err);
				} else {
					campground.comments.push(comment);
					campground.save();
					console.log("Created new comment");
					}
				});
			}
		});
	});
});
}

module.exports = seedDB;

