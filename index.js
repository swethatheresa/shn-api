const express = require("express");
require("./config");
const Gallery = require("./content");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (request, response) => {
  response.json(
    {
      "message": "Welcome to the Hostel Management System API",
      "routes": [
        {
          "route": "/add",
          "methods": [
            "POST"
          ]
        },
        {
          "route": "/content",
          "methods": [
            "GET"
           
          ]
        }
      ]
    }
  )
})



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


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports=app;
