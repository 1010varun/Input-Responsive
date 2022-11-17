import React, { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import "./App.css"

const App = () => {

    const [action, setAction] = useState("Login Form");

    const toastMesage = (message, type) => {
            toast(message, {theme: "dark"});
        }

  return (
    <div>
      <div class="wrapper">
        <div class="title-text">
          <div class="title login">{action}</div>
          {/* <div class="title signup">Signup Form</div> */}
        </div>
        <div class="form-container">
          <div class="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              // checked
              onChange={() => setAction("Login Form")}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              onChange={() => setAction("Signup Form")}
            />
            <label for="login" class="slide login">
              Login
            </label>
            <label for="signup" class="slide signup">
              Signup
            </label>
            <div class="slider-tab"></div>
          </div>
          {action === "Login Form" && <Login func={toastMesage} />}
          {action === "Signup Form" && <Signup func={toastMesage} />}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default App;
