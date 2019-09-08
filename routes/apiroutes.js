//establish the dependencies
const express = require('express');
const app = express();
const orm = require("../config/orm");

//export the route
module.exports = function (app) {

    //get all burgers
        app.get('/', function(req, res) {
            orm.selectAll(function (error, data) {
                if (error) {
                    return res.render('error');
                }
                res.render("index", { burgers: data });
            });
        });



    // Adding and Update burger section
    app.post("/add", function (req, res) {
        console.log("This is req body: " + req.body);
        // const burgerName = req.body.burger_name;        

        // orm.insertOne(burgerName, function (error, data) {
        //     if (error) {
        //         return res.status(401).json({
        //             message: 'Not able to add the burger'
        //         });
        //     }

        //     return res.json({
        //         burger_name: burgerName,
        //         id: data.id,
        //         devoured: 0
        //     });
        // });
    });






};
