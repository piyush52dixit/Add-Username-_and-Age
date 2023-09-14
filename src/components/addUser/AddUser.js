import React, { useState } from "react";
import Button from "../wrapper/Button";
import "./AddUser.css";
import ErrorModal from "../errorModal/ErrorModal";
import Card from "../wrapper/Card";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return setError({
        title: "Invalid Input",
        message: "Please type valid Username and Age (>0)",
      });
    }
    if (+enteredAge <= 0) {
      return setError({
        title: "Invalid Age",
        message: "Please type valid Age (>0)",
      });
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredAge("");
    setEnteredUserName("");
  };

  const usernameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorhandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorhandler}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              id="username"
              value={enteredUsername}
              onChange={usernameHandler}
            />
          </div>
          <div>
            <label htmlFor="userage"> Age (Years)</label>
            <input
              type="number"
              id="userage"
              value={enteredAge}
              onChange={ageHandler}
            />
          </div>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
