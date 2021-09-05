// Require module
const express = require("express");

//Add customers router
const customerRouter = require("./customers.module");

// Initiliaze application
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve static css file for page style
app.use(express.static('public'));

// Tell app to use customers router
app.use("/customers", customerRouter);

// Define port for my web app
let port = process.env.PORT || 3000;

// Render static content or an existing html page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port);
console.log("listening on port: ", port);
