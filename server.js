//establish dependencies

var express = require('express');
var bodyParser = require('body-parser');
//var path = require('path');
//const friends = require("./app/data/friends");
//console.log(friends.getFriendsArray());

//create instannces of express
var app = express();
//set the listening port with default
var PORT = process.env.PORT || 3000;
//create json converters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");
app.use(express.static('public/assets'))
//access routes created in other .js files
require('./routing/apiroutes.js')(app);


// Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);


//access routes created in other .js files
//require('./app/routing/apiRoutes.js')(app);
//require('./app/routing/htmlRoutes.js')(app);
// var connection = require("./config/connection.js");

// // Root get route
// app.get("/", function (req, res) {
//     connection.query("SELECT * FROM burgers;", function (err, data) {
//         if (err) throw err;


//         // Test it
//         // return res.send(data);

//         //res.render("index", { burgers: data });
//     });
// });




app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});