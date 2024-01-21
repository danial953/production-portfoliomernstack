const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
