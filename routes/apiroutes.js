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


    // // Create a new plan
    // app.post("/api/plans", function (req, res) {
    //     connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function (err, result) {
    //         if (err) {
    //             return res.status(500).end();
    //         }

    //         // Send back the ID of the new plan
    //         res.json({ id: result.insertId });
    //         console.log({ id: result.insertId });
    //     });
    // });

    // Adding and Update burger section
    app.post("/add", function (req, res) {
        console.log("This is req body: " + req.body.burger_name);
        const burgerName = req.body.burger_name;        

        orm.addOne(burgerName, function (error, result) {
            if (error) {
                return res.status(401).json({
                    message: 'Not able to add the burger'
                });
            }
//console.log(result);
            return res.json({
                burger_name: burgerName,
                id: result.insertId,
                devoured: 0
            });
        });
    });






};
