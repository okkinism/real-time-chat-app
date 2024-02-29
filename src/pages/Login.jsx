import React from "react";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>ChatFlow</h1>
        <p>Login</p>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p>
            Belum memiliki akun? <a href="/register">Daftar</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
