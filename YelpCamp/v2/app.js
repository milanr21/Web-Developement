var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true,  useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name: "Sagarmatha Camp",
// 		image: "https://i.pinimg.com/originals/10/9b/55/109b55040356a3cbe13d68a7acf341b2.jpg",
// 		description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
// }, function(err, campground){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("NEWLY CREATED CAMPGROUND: ");
// 		console.log(campground);
// 	}
// });


// var campgrounds = [
// 		{name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4nLxqJp7uUaXWBgS3M_9GS8QCMAvEmT4gWQ&usqp=CAU.jpg"},
// 		{name: "Sagarmatha Camp", image: "https://i.pinimg.com/originals/10/9b/55/109b55040356a3cbe13d68a7acf341b2.jpg"},
// 		{name: "Everest Camp", image: "https://nwdomaso.com/2015/wp-content/uploads/downhill_2.jpg"},
// 		{name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4nLxqJp7uUaXWBgS3M_9GS8QCMAvEmT4gWQ&usqp=CAU.jpg"},
// 		{name: "Sagarmatha Camp", image: "https://i.pinimg.com/originals/10/9b/55/109b55040356a3cbe13d68a7acf341b2.jpg"},
// 		{name: "Everest Camp", image: "https://nwdomaso.com/2015/wp-content/uploads/downhill_2.jpg"},
// 		{name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4nLxqJp7uUaXWBgS3M_9GS8QCMAvEmT4gWQ&usqp=CAU.jpg"},
// 		{name: "Sagarmatha Camp", image: "https://i.pinimg.com/originals/10/9b/55/109b55040356a3cbe13d68a7acf341b2.jpg"},
// 		{name: "Everest Camp", image: "https://nwdomaso.com/2015/wp-content/uploads/downhill_2.jpg"},
// 		{name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4nLxqJp7uUaXWBgS3M_9GS8QCMAvEmT4gWQ&usqp=CAU.jpg"},
// 		{name: "Sagarmatha Camp", image: "https://i.pinimg.com/originals/10/9b/55/109b55040356a3cbe13d68a7acf341b2.jpg"},
// 		{name: "Everest Camp", image: "https://nwdomaso.com/2015/wp-content/uploads/downhill_2.jpg"}
// 	];
 
app.get("/", function(req, res){
	res.render("landing");
});

//INDEX - show all campgrounds

app.get("/campgrounds", function(req, res){
	//get all campgrounds from DB
	Campground.find({}, function(err, allcampgrounds){
		if(err){
			console.log(err);
		} else{
			res.render("index", {campgrounds: allcampgrounds});
		}
	});	
});

//CREATE - add new campgrounds

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;

	var newCampground = {name: name, image: image, description: desc}
	// Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		}else{
				res.redirect("/campgrounds");

		}
	})
}); 

//NEW - show form to create new campgrounds

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
	//find the campground with provided ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		}else{
			//render show template with that campground
			res.render("show", {campground: foundCampground});
		}
	});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("The YelpCamp Has Started!");
});