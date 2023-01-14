const mongoose = require("mongoose");
const url = `mongodb+srv://swethatheresa:swetharejibi123@Cluster0.qql6qxf.mongodb.net/?retryWrites=true&w=majority`;
const connectionParams = {};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Not connected");
  });