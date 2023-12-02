const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to db..."), {})
  .catch((err) => console.log(err));
