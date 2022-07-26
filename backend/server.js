const express = require("express");
const helper = require("./helper/functions");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  helper.getData().then((result) => {
    res.send(result);
  });
});

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/user", (req, res) => {
  console.log("post runing");
  const { id, name } = req.body;

  if (id !== null) {
    helper.postData(id, name).then((result) => {
      console.log(result);
      res.status(200).json({ body: req.body });
    });
  }
});

app.listen(3000, () => {
  console.log("port is running");
});
