const data = require("./data.js")
const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "./public")));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator());


app.get("/", function (req, res) {
    res.render("home", data)
})

app.post("/toDoList", function (req, res) {
    data.toDo.push(req.body);
    return res.redirect("/");
})

app.listen(port, function () {
    console.log("Server up on this port: ", port);
})