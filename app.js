var express = require("express");
var bodyParser = require("body-parser");

app=express();

//App settings
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.render("landing",{page: req.url});
});

app.get('/bio', function(req, res) {
    res.render("bio",{page: req.url});
});

app.get('/projects', function(req, res) {
    res.render("projects",{page: req.url});
});

app.get('/refferences', function(req, res) {
    res.render("refferences",{page: req.url});
});

app.get('/hobbies', function(req, res) {
    res.render("hobbies",{page: req.url});
});

app.get('/competences', function(req, res) {
    res.render("competences",{page: req.url});
});




//Runs the app at localhost
app.listen(3000,function(){
	console.log("Server Started at port 3000!");
});