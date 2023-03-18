import "./App.css";
import NavBar from "./NavBar";
import axios from "axios";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        alert("user not found");
      })
      .then(function ({ data }) {
        console.log(data);
        alert("successful login with token: " + data.token);
      });
  };
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div class="col-sm-6 col-md-4 left-div">
            <form className="form" onSubmit={(event) => onLogin(event)}>
              <h1 class="title">Welcome Back</h1>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="emailInput"
                  placeholder="Enter email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary submit-btn">
                Login
              </button>
              <div class="form-footer">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <div class="form-forget">
                  <p>Forgot password?</p>
                </div>
              </div>
            </form>
          </div>
          <div class="d-none d-sm-block col-sm-6 col-md-8 right-div"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
