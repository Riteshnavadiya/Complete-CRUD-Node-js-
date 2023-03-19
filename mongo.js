const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NEW", { useNewUrlParser: true });

mongoose.set("strictQuery", false);
const schema = new mongoose.Schema({
  fname: String,
});

module.exports = mongoose.model("products", schema);
