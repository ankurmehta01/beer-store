const inputData = [
  {
    name: "employeeId",
    rules: {
      required: {
        value: true,
        message: "*required",
      },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "Username format is not correct.",
      },
    },

    label: "Username",
    type: "text",
  },
  {
    name: "userName",
    rules: {
      required: {
        value: true,
        message: "*required",
      },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "Username format is not correct.",
      },
    },

    label: "Username",
    type: "text",
  },
];

export default inputData;
