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

  const { baseStore, assignedStores, basicInformation } = req.body;

  const { employeeId, firstName, userName, role, lastName, email } =
    basicInformation[0];

  console.log(employeeId, firstName, userName, role, lastName, email);

  const store = helper.mergeArray(baseStore, assignedStores, employeeId);
  console.log(store, "store.......................................");

  if (employeeId !== null) {
    helper
      .postUserData(
        employeeId,
        firstName,
        userName,
        role,
        lastName,
        email,
        store
      )
      .then((result) => {
        res.status(200).json({ body: req.body });
      });
  }
});

app.listen(PORT, () => {
  console.log(`Port is running${PORT}`);
});
