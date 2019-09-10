var connection = require("./connection.js");

//let data;
var orm = {

    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
            //console.log(data);
        });
    },
  
    addOne: function (burgerName, cb) {        
        const sql = ` INSERT INTO burgers(burger_name) VALUES('${burgerName}')`;
        connection.query(sql, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
            //console.log(data);
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