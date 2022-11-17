import React, { useState } from "react";
import axios from "axios";

const Signup = ({ func }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handelCilck = async () => {
    if (email.length === 0 && password.length === 0 && name.length === 0) {
      return func("please enter credentials");
    }
    else{
      await axios({
        method: "post",
        url: "http://127.0.0.1:5000/signup",
        data: {
          email,
          password,
          name,
        },
      })
        .then(() => {
          console.log("success signup");
          func("Signup successfull");
        })
        .catch(() => {
          console.log("error signup");
          func("wrong credentials");
        });
      setEmail("");
      setName("");
      setPassword("");
    }
  };

  return (
    <div class="form-inner">
      <form action="#" class="signup">
        <div class="field">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="field">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div class="field btn">
          <div class="btn-layer"></div>
          <button type="submit" onClick={handelCilck}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
