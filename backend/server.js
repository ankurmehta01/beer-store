const express = require("express");
const helper = require("./helper/functions");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3001;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  helper.getData("userInfo").then((result) => {
    res.send(result.recordsets);
  });
});

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/user", (req, res) => {
  console.log("post runing");
  const { email, employeeId, firstName, lastName, role, userName } = req.body;

  if (employeeId !== null) {
    helper
      .postUserData(
        employeeId,
        firstName,
        userName,
        role,
        lastName,
        email,
        "userInfo"
      )
      .then((result) => {
        console.log(result);
        res.status(200).json({ body: req.body });
      });
  }
});

app.listen(PORT, () => {
  console.log(`Port is running${PORT}`);
});
