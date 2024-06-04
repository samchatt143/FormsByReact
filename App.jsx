import Header from "./components/Header.jsx";
import Signup from "./components/SignUp.jsx";
import Login from "./components/StateLogin.jsx";

import React, { useState } from "react";
const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleKeyPress = (event) => {
    const key = event.key;
    if (key === "#") {
      setActiveComponent("SignUp");
    } else if (key === "$") {
      setActiveComponent("Login");
    }
  };

  // Attach the event listener to the window on component mount
  React.useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      // Remove the event listener on component unmount
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <Header />
      <header>
        <h2>Just!! Press # for SIGNUP form...Press $ for LOGIN form</h2>
        <h4>
          If you correctly fill the FORM(s) then after clicking the Signup/Login
          button..You can check the console(If in desktop) for viewing the data
          entered by YOU!
        </h4>
        <input></input>
      </header>
      {activeComponent === "SignUp" && <Signup />}
      {activeComponent === "Login" && <Login />}
    </div>
  );
};

export default App;
