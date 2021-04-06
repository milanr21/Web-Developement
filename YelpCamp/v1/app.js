var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4nLxqJp7uUaXWBgS3M_9GS8QCMAvEmT4gWQ&usqp=CAU.jpg"},
		{name: "Sagarmatha Camp", image: "https://i.pinimg.com/originals/10/9b/55/109b55040356a3cbe13d68a7acf341b2.jpg"},
		{name: "Everest Camp", image: "https://nwdomaso.com/2015/wp-content/uploads/downhill_2.jpg"},
		{name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4nLxqJp7uUaXWBgS3M_9GS8QCMAvEmT4gWQ&usqp=CAU.jpg"},
		{name: "Sagarmatha Camp", image: "https://i.pinimg.com/originals/10/9b/55/109b55040356a3cbe13d68a7acf341b2.jpg"},
		{name: "Everest Camp", image: "https://nwdomaso.com/2015/wp-content/uploads/downhill_2.jpg"},
		{name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4nLxqJp7uUaXWBgS3M_9GS8QCMAvEmT4gWQ&usqp=CAU.jpg"},
		{name: "Sagarmatha Camp", image: "https://i.pinimg.com/originals/10/9b/55/109b55040356a3cbe13d68a7acf341b2.jpg"},
		{name: "Everest Camp", image: "https://nwdomaso.com/2015/wp-content/uploads/downhill_2.jpg"},
		{name: "Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4nLxqJp7uUaXWBgS3M_9GS8QCMAvEmT4gWQ&usqp=CAU.jpg"},
		{name: "Sagarmatha Camp", image: "https://i.pinimg.com/originals/10/9b/55/109b55040356a3cbe13d68a7acf341b2.jpg"},
		{name: "Everest Camp", image: "https://nwdomaso.com/2015/wp-content/uploads/downhill_2.jpg"}
	];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
}); 

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("The YelpCamp Has Started!");
});