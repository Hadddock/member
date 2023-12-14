// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
});

const UserModel = mongoose.Model("UserModel", UserSchema);
module.exports = UserModel;
