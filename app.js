const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "list_app",
});

connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("success");
});

app.get("/", (req, res) => {
res.render("top.ejs");
});
app.get("/index", (req, res) => {
    res.render("index.ejs");
});
app.get("/1", (req, res) => {
    connection.query("SELECT * FROM users", (error, results) => {
        console.log(results);
        res.render("hello.ejs");
    });
});

app.listen(3000);