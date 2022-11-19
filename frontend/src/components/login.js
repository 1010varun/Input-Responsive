import React, { useState } from "react";   tg
import axios from "axios"

const Login = ({func}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelCilck = async () => {
    if (email.length === 0 && password.length === 0) {
      return func("please enter credentials");
    }
    else{
      await axios({
        method: "post",
        url: "http://127.0.0.1:5000/login",
        data: {
          email: email,
          password: password,
        },
      })
        .then(() => {
          console.log("success login");
          func("login successfully");
        })
        .catch(() => {
          console.log("error login");
          func("wrong credentials");
        });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div class="form-inner">
        <form action="#" class="login">
          <div class="field">
            <input
              autoFocus
              type="text"
              placeholder="Email Address"
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
          {/* <div class="pass-link">
              <a href="#">Forgot password?</a>
            </div> */}
          <div class="field btn">
            <div class="btn-layer"></div>
            <button type="submit" onClick={handelCilck}>
              Login
            </button>
          </div>
          {/* <div class="signup-link">
              Not a member? <a href="">Signup now</a>
            </div> */}
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;
