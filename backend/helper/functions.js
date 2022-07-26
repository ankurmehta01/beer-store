const config = require("../db/dbConfig");
const sql = require("mssql");

const getData = async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(config.sqlConfig);
    const result = await sql.query("select * from products");
    return result;
  } catch (err) {
    // ... error checks
    console.log(err);
  }
};

const postData = async (id, name) => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(config.sqlConfig);
    const result = await sql.query(
      `insert into products values(${id},'${name}')`
    );
    return result;
  } catch (err) {
    // ... error checks
    console.log("error............helper");
    console.log(err);
  }
};
module.exports = { getData, postData };
