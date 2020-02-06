const express = require("express");

const exphbs = require("express-handlebars");
const routes = require("./routes/controller.js");
const app = express();


const PORT = process.env.PORT || 2222;

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);




app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");




app.listen(PORT, function() {
    console.log(`APP LISTENING: ${PORT}`);
});




