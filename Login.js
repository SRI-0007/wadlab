import React from "react";

function Login() {
  return (
    <div>
      <h2>Login Page</h2>

      <input placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button onClick={() => alert("Login Successful!")}>
        Login
      </button>
    </div>
  );
}

export default Login;