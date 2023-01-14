const express = require("express");
require("./config");
const Gallery = require("./content");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  let gallery = new Gallery(req.body);
  let result = await gallery.save();
  result = await result.toObject();
  res.send(result);
});
app.get("/content", async (req, res) => {
  let gallery = await Gallery.find().sort({ _id: "desc"});
  if (gallery.length > 0) res.send(gallery);
  else res.send({ result: "error" });
});


app.listen(5000);