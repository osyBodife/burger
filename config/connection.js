var mysql = require("mysql");


if(process.env.JAWSDB_URL){

connection=mysql.createConnection(process.env.JAWSDB_URL);

}else{
    var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Internet@922",
    database: "burgers_db"
});
}
//the same as connection.connect();
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //connection.end();
});

module.exports=connection;