const express = require("express");
const path = require("path");
const app = express();
port = 1024;

//For serving static files
app.use("/static", express.static("static"));

//set the template engine as pug
app.set("view engine", "pug");

//Set the views directory
app.set("views", path.join(__dirname, "views"));

//Our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render("demo", { title: "Hey", message: "Hello there!" });
});

app.get("/", (req, res) => {
    res.status(200).send("This is homepage of my first express app with Ankur");
});
app.get("/about", (req, res) => {
    res.send("This is about page of my first express app with Ankur");
});
app.get("/this", (req, res) => {
    res.status(404).send("This page is not found");
});
app.post("/about", (req, res) => {
    res.send(
        "This is a post request about page of my first express app with Ankur"
    );
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
