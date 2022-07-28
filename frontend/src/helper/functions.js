const postData = async (userObj) => {
  let response = await fetch("http://localhost:3001/user", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  response = await response.json();
  return response;
};

module.exports = { postData };
