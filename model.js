const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://avijitda126:avijit!120@cluster0.p2mfujl.mongodb.net/Url-Shorter?retryWrites=true&w=majority")
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
