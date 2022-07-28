let dummy_store = [
  {
    id: 1,
    address: "2002,198 Queen St.E.Brampton",
    assignedStore: false,
    baseStore: false,
  },
  {
    id: 2,
    address: "2003,198 king St.E.Toronto",
    assignedStore: false,
    baseStore: false,
  },
  {
    id: 3,
    address: "2004,198 Queen St.E.NewYork",
    assignedStore: false,
    baseStore: false,
  },
  {
    id: 4,
    address: "2005,198 Queen St.E.Brampton",
    assignedStore: false,
    baseStore: false,
  },
];

export async function getAllData() {
  console.log("getalldata called");
  //   fetch("http://localhost:3001/")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log("second then is called");
  //       console.log(response);
  //       return dummy_store;
  //     });

  let response = await fetch("http://localhost:3001/");
  response = await response.json();

  return dummy_store;
}

export function getBaseStores() {
  const baseStore = dummy_store.filter((item) => {
    return item.baseStore === true;
  });
  return baseStore;
}
export function getAssignedStores() {
  const assignedStore = dummy_store.filter((item) => {
    return item.assignedStore === true;
  });
  return assignedStore;
}
