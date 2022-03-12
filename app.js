require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
// @ROUTES
const home = require("./routes/home");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

// *get routes
app.get("/", home.root);

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started at port 3000");
});  