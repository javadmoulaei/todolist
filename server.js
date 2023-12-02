const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

require("./utils/database");
const { setStatics } = require("./utils/statics");
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Statics
setStatics(app);

//Routes

app.use("/admin", adminRoutes);
app.use("/", indexRoutes);
app.use(require("./controllers/error").get404);

app.listen(3000, () => console.log(`Server is running...`));
