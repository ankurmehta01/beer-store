import React, { useEffect, useState } from "react";
import Input from "./Input";
import classes from "./form.module.css";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import StoreList from "./StoreList";
import { getAllData, getAssignedStores, getBaseStores } from "./database/db";
import { useForm } from "react-hook-form";
import { postData } from "../helper/functions";
import Controller from "./Controller";
import RadioButton from "./RadioButton";
import SearchList from "./SearchList";
import { inputDataColumn1, inputDataColumn2 } from "./formData";

function Form() {
  let baseStores = getBaseStores();

  const default_values = {
    firstName: "",
    lastName: "",
    employeeId: "",
    userName: "",
    role: "",
    email: "",
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: default_values,
  });

  const [enteredSearchValue, setEnteredSearchValue] = useState("");
  const [selectedId, setSelectedId] = useState(0);
  const [selectedBaseStore, setSelectedBaseStore] = useState([]);
  const [selectedAssignedStore, setSelectedAssignedStore] = useState([]);
  const [searchedStores, setSearchedStore] = useState([]);
  const [allStore, setAllStore] = useState([]);

  let allFormData = {
    baseStore: null,
    assignedStores: null,
    basicInformation: null,
  };

  const [isBase, setIsBase] = useState(true);
  console.log(isBase, "isBase..........");

  useEffect(() => {
    console.log("useEffect ");
    getAllData()
      .then((data) => {
        setAllStore(data);
        console.log(data, "from useeffect data");
        console.log(allStore, "allStore.....");
        return data;
      })
      .then((data) => {
        let searchedStoresArray = data.filter((item) => {
          return item.address
            .toLowerCase()
            .includes(enteredSearchValue.toLowerCase());
        });
        setSearchedStore(searchedStoresArray);
        console.log(searchedStores, "serchedstore");
      });
  }, []);

  const searchValueChangeHandler = (e) => {
    const enteredValue = e.target.value;
    console.log(e.target.value);
    setEnteredSearchValue(enteredValue);
  };

  const testingFunction = () => {
    console.log("testing function called", allStore);
  };

  const serachListClickHandler = (e) => {
    const id = parseInt(e.currentTarget.getAttribute("id"));
    console.log(allStore, "allStore........");
    allStore.map((item) => {
      if (item.id === id) {
        setSelectedId(item.id);
        setEnteredSearchValue(item.address);
      }
    });
  };

  const radioChangeHandler = (e) => {
    const id = e.target.getAttribute("id");
    if (id === "assigned") {
      setIsBase(false);
    }
    if (id === "base") {
      setIsBase(true);
    }
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    const id = selectedId;
    console.log(id, "from addUseHandler");
    if (isBase === null) {
      alert("please select the store first");
      return;
    } else if (isBase) {
      if (id !== 0) {
        const selectedStore = allStore.filter((item) => {
          return item.id === id;
        });
        console.log(selectedStore);
        setSelectedBaseStore(selectedStore);
        let latestAssignedStore = selectedAssignedStore.filter((item) => {
          return item.id !== id;
        });
        setSelectedAssignedStore(latestAssignedStore);
      }
    } else {
      if (id !== 0) {
        const selectedByUser = allStore.filter((item) => {
          return item.id === id;
        });
        const isSelectedItemPresentInBaseStore = selectedBaseStore.filter(
          (item) => {
            return item.id === id;
          }
        );
        if (isSelectedItemPresentInBaseStore.length === 0) {
          if (selectedAssignedStore.length === 0) {
            setSelectedAssignedStore(selectedByUser);
          } else {
            const alreadyInAssignedStore = selectedAssignedStore.filter(
              (item) => {
                return item.id === id;
              }
            );

            if (alreadyInAssignedStore.length === 0) {
              setSelectedAssignedStore([
                ...selectedAssignedStore,
                selectedByUser[0],
              ]);
            }
          }
        }
      }
    }
    setEnteredSearchValue("");
    setSelectedId(0);
  };

  const resetBaseStores = (array) => {
    setSelectedBaseStore(array);
  };
  const resetAssignedStore = (array) => {
    console.log(array, "from form.js...");
    setSelectedAssignedStore(array);
  };

  function submitHandler(data) {
    console.log(data, "data from form.js");

    allFormData.baseStore = selectedBaseStore;
    allFormData.assignedStores = selectedAssignedStore;
    allFormData.basicInformation = [data];
    console.log("allformData", allFormData);
    postData(allFormData).then((res) => {
      console.log(res, "after post data is called");
    });
  }
  console.log(errors, "errors.......");

  return (
    <IconContext.Provider value={{ size: "15px" }}>
      <form
        className={classes.container}
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className={classes.row1}>
          <div className={classes.column1}>
            {inputDataColumn1.map((item) => {
              return (
                <div className={classes.inputContainer}>
                  <Controller
                    {...{
                      control,
                      register,
                      name: item.name,
                      rules: item.rules,
                      render: (props) => (
                        <Input
                          {...props}
                          label={item.label}
                          type={item.label}
                        />
                      ),
                    }}
                  />
                  {errors[item.name] && (
                    <span>{errors[item.name].message}</span>
                  )}
                </div>
              );
            })}
          </div>
          <div className={classes.column2}>
            {/* <div className={classes.selectContainer}> */}
            <div className={classes.inputContainer}>
              <div>
                <label>Role</label>
                <select {...register("role", { required: "*required" })}>
                  <option value="">Select Role</option>
                  <option value="role1">Role1</option>
                  <option value="role1">Role2</option>
                </select>
              </div>
              {errors.role && <span>{errors.role.message}</span>}
            </div>
            {/* </div> */}
            {inputDataColumn2.map((item) => {
              return (
                <div className={classes.inputContainer}>
                  <Controller
                    {...{
                      control,
                      register,
                      name: item.name,
                      rules: item.rules,
                      render: (props) => (
                        <Input
                          {...props}
                          label={item.label}
                          type={item.label}
                        />
                      ),
                    }}
                  />
                  {errors[item.name] && (
                    <span>{errors[item.name].message}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={classes.row2}>
          <div className={classes.inputContainer}>
            <input
              type="text"
              placeholder=" Search store by code."
              // label="Assign a Store"
              // labelSize="large"
              value={enteredSearchValue}
              onChange={searchValueChangeHandler}
            ></input>
          </div>
          <Button addUserHandler={addUserHandler}>
            <AiOutlinePlus />
            Add User To Store
          </Button>
        </div>

        <RadioButton isBase={isBase} radioChangeHandler={radioChangeHandler} />

        {enteredSearchValue && (
          <SearchList
            searchedStores={searchedStores}
            serachListClickHandler={serachListClickHandler}
          />
        )}

        <div className={classes.row3}>
          <StoreList
            heading="Base Store"
            dataArray={selectedBaseStore}
            isBase={isBase}
            resetStores={resetBaseStores}
          />
          <StoreList
            heading="Other Assigned Store"
            dataArray={selectedAssignedStore}
            isBase={isBase}
            resetStores={resetAssignedStore}
          />
        </div>
        <div className={classes.row4}>
          <Button class="black">Cancel</Button>
          <Button>Save</Button>
        </div>
      </form>
    </IconContext.Provider>
  );
}

export default Form;
