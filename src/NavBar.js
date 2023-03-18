import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav class="navbar shadow-sm p-3 bg-white rounded header">
        <a class="navbar-brand" href="#">
          ATools.
        </a>
        <div class="btn-div">
          <button class="reg-btn btn">Start Free Trial</button>
          <button class="login-btn btn">Login</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
