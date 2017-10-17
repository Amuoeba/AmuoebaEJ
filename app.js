var express = require("express");
var bodyParser = require("body-parser");

app=express();

//App settings
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.render("landing")
});



//Runs the app at localhost
app.listen(3000,function(){
	console.log("Server Started at port 3000!");
});