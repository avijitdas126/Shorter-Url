const mongoose = require("mongoose");
require('dotenv').config();
mongoose
  .connect(process.env.Mongo_Url)
  .then(() => {
    console.log("Database Connection Successfully...");
  })
  .catch((err) => {
    console.log(err);
  });
const Schema = new mongoose.Schema({
  id:{type:String},
shortenurl:{type:String},
  Url: { type: String},
  preview: { type: Array },
  Date: { type: Date, default: Date.now() },
});
const Url = new mongoose.model("Url",Schema);
module.exports=Url
