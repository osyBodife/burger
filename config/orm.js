var connection = require("./connection.js");

//let data;
var orm = {

    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
            console.log(data);
        });
    },
  
    insertOne: function (burgerName, cb) {
        const sql = ` INSERT INTO burgers_db.burgers(burger_name, devoured) VALUES('${burgerName, false}')`;
        connection.query(sql, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },


    deleteOne: function (id, cb) {
        const sql_query = `DELETE FROM burgers_db.burgers WHERE id = ${id}`;
        connection.query(sql_query, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    }



};




module.exports = orm;