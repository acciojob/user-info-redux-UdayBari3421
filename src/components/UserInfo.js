import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useState } from 'react';
import { email, name } from "../store/actions/actionType";
const UserInfo = () => {
  // const [nameInput, setName] = useState("");
  // const [emailInput, setEmail] = useState("");
  const dispatch = useDispatch();

  const { Name, Email } = useSelector((state) => state);
  function handelEmailInput(e) {
    dispatch(email(e.target.value));
  }

  function handelNameInput(e) {
    dispatch(name(e.target.value));
  }

  return (
    <div className="UserInfo">
      <div>
        <span>Name :</span>
        <input type="text" onInput={handelNameInput}></input>
        <br></br>
        <br></br>
        <span>Email :</span>
        <input type="email" onInput={handelEmailInput}></input>
      </div>
      <p>Current values in store:</p>

      <div className="output">
        <span>Name -</span> <span>{Name}</span>
        <br></br>
        <br></br>
        <span>Email -</span> <span>{Email}</span>
      </div>
    </div>
  );
};

export default UserInfo;
