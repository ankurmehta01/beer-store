const config = require("../db/dbConfig");
const sql = require("mssql");

const getData = async (tableName) => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(config.sqlConfig);
    const result = await sql.query(`select * from ${tableName}`);
    return result;
  } catch (err) {
    // ... error checks
    console.log(err);
  }
};

const postUserData = async (
  employeeId,
  firstName,
  userName,
  role,
  lastName,
  email,
  store
) => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(config.sqlConfig);
    const result = await sql.query(
      `insert into userInfo values(${employeeId},'${firstName}','${userName}','${role}','${lastName}','${email}')`
    );

    const result2 = await store.map((item) =>
      sql.query(
        `insert into userStore values(${item.u_id},${item.s_id},'${item.storeType}')`
      )
    );
  } catch (err) {
    // ... error checks
    console.log("error............helper");
    console.log(err);
  }
};

const mergeArray = (baseArray, assignedArray, employeeId) => {
  let finalArray = [];
  baseArray.map((item) => {
    let obj = {};
    (obj.u_id = employeeId), (obj.s_id = item.id), (obj.storeType = "base");
    finalArray.push(obj);
  });
  assignedArray.map((item) => {
    let obj = {};
    (obj.u_id = employeeId), (obj.s_id = item.id), (obj.storeType = "assigned");
    finalArray.push(obj);
  });
  return finalArray;
};
module.exports = { getData, postUserData, mergeArray };
