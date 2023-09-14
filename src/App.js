import AddUser from "./components/addUser/AddUser";
import Userlist from "./components/userlist/Userlist";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [userlist, setUserlist] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserlist((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="container">
      <AddUser onAddUser={addUserHandler} />
      <Userlist users={userlist} />
    </div>
  );
};

export default App;
