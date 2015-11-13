var express = require("express");
var bodyParser = require("body-parser");

var usersCtrl = require("./controllers/usersCtrl");
var moviesCtrl = require("./controllers/moviesCtrl");

var app = express();


app.use(bodyParser.json()); //Function inside calls next automatically. 


//This is middleware - this can be used to collect info on what people are asking for.
app.use(function(req, res, next) {
	console.log("path", req.path);
	console.log("body", req.body);
	next();
});


app.get("/users", usersCtrl.index);
app.get("/users/:id", usersCtrl.show);
app.post("/users", usersCtrl.build);
app.put("/users/:id", usersCtrl.update);
app.delete("/users/:id", usersCtrl.destroy);

// app.get("/movies", moviesCtrl.index);
// app.get("/movies/:id", moviesCtrl.show);
// app.post("/movies", moviesCtrl.build);
// app.put("movies/:id", moviesCtrl.update);
// app.delete("movies/:id", moviesCtrl.destroy);

var port = 3000;
app.listen(port, function () {
	console.log("Listening on port" + port);
;});