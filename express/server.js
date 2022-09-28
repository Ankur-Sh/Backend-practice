const express = require("express");
const app = express();
app.get("/", function (request, response) {
    response.send("hello");
});
app.get("/contact", function (request, response) {
    response.send("Contact me at:asblaster100@gmail.com");
});
app.get("/about", function (request, response) {
    response.send("My name is Ankur Sharma and I love Coding");
});
app.listen(3000, function () {
    console.log("Server started on port 3000");
});
