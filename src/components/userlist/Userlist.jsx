import React from "react";
import Card from "../wrapper/Card";
import "./Userlist.css";

const Userlist = (props) => {
  return (
    <div className="userlist">
      <Card>
        <ul>
          {props.users.map((user) => {
            return (
              <li key={user.id}>
                <div className="username">{user.name} </div>
                <div className="age">{user.age} years old</div>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default Userlist;
