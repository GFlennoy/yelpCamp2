var express = require("express");
var app = express();
var bodyParser = require("body-parser")

	var campgrounds = [
		{name: "Salmon Creek", image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Crystal Lake", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Sleepaway Camp", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Salmon Creek", image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Crystal Lake", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Sleepaway Camp", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Salmon Creek", image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Crystal Lake", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
		{name: "Sleepaway Camp", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"},
		
	]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds",{campgrounds:campgrounds});
})

app.post("/campgrounds", function(req,res){
// 	get data from form and add to array
	var name = req.body.name;
	var image = req.body.image;
	var newCampGround = {name: name, image: image};
	campgrounds.push(newCampGround);
// 	redirect back to campgrounds page
	res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs")
})

// Tell Express to listen for requests (start server)
app.listen(3000, function() { 
  console.log('Yo dog, yelpcamp server has started'); 
});