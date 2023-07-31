const express = require("express");
const Url = require("./model");
const uuid = require("./uuid");
const cors = require("cors");
const app = express();
//cors using for all 
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
const port = 8000;
//Content-type is json is required
app.use(express.json());
app.post("/v2/", (req, res) => {
  let {url} = req.body;
  //if url has no https:// so i add https://
  if(!url.includes('https://') && url.length>0)
  {
    url='https://'+url
  }
  const play = async () => {
    let ima = uuid(6);
    let url1 = new Url({
      id: ima,
      shortenurl: "https://short-url-z0ab.onrender.com/" + ima,
      Url: url,
    });
    const data = await url1.save();
    res.send(data);
  };
if(url)
{
  play()
}
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  const play = async () => {
    const result = await Url.findOneAndUpdate(
      { id },
      {
        $push: {
          preview: Date.now(),
        },
      }
    );
    console.log(result);
    if (result) {
      res.redirect(result.Url);
    } else {
      // let url=result.Url
      res.send("Error");
      // res.redirect(url);
    }
  };
  play();
});
app.listen(port, () => {
  console.log("running at http://localhost:" + port);
});
