//establish the dependencies
const express = require('express');
const app = express();
//const orm = require("../config/orm");
var orm = require("../config/orm.js");
//export the route
module.exports = function (app) {

    //get the list of existing friends in db
    app.get('/', function (req, res) {      
          //res.send("Hello World");

        orm.selectAll(function (error, burger_name) {
            if (error) {
                return res.status(501).JSON({
                    message: "Not able to query the DB"
                });


            }
            //if no error, render the template
            res.render("index");


        });
//orm.selectAll();

    });



};