const express = require("express");
const path = require("path");
const app = express();
port = 1024;
//EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); //For serving static files

//PUG SPECIFIC STUFF
app.set("view engine", "pug"); //set the template engine as pug
app.set("views", path.join(__dirname, "views")); //Set the views directory

//ENDPOINTS
app.get("/", (req, res) => {
    const con =
        "this is the best content on the internet so far so use it wisely";
    const params = { title: "Pubg is the best Game", content: con };
    res.status(200).render("index.pug", params);
});

//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
