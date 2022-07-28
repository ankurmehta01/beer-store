export const inputDataColumn1 = [
  {
    name: "employeeId",
    rules: {
      required: {
        value: true,
        message: "*required",
      },
      maxLength: { value: 3, message: "Limit exceeded" },
    },

    label: "Employee Id",
    type: "number",
  },
  {
    name: "firstName",
    rules: {
      required: {
        value: true,
        message: "*required",
      },
      pattern: {
        value: /^[a-zA-Z]+$/,
        message: "Only alphabet values are required.",
      },
    },

    label: "First Name",
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

export const inputDataColumn2 = [
  {
    name: "lastName",
    rules: {
      required: {
        value: true,
        message: "*required",
      },
      pattern: {
        value: /^[a-zA-Z]+$/,
        message: "Only alphabet values are required.",
      },
    },

    label: "Last Name",
    type: "text",
  },
  {
    name: "email",
    rules: {
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Email is not in a right format.",
      },
    },

    label: "Email",
    type: "text",
  },
];

// export const selectData=[
//   {}
// ]
