const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  description: String,
});
module.exports = mongoose.model("users", UserSchema);
