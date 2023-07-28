import React, { useState } from "react";
import "./reg.css"; 

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister(username, password);
  };

  return (
    <center>
      <form className="registration-form"> {/* Add the class name for the form */}
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button onClick={handleRegister}>Register</button>
      </form>
    </center>
  );
};

export default RegisterPage;
