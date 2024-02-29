import React from "react";
import Add from "../img/AddAvatar.png";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>ChatFlow</h1>
        <p>Daftar Akun</p>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} placeholder="Avatar" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Isi Avatar</span>
          </label>
          <button type="submit">Daftar</button>
          <p>
            Sudah memiliki akun? <a href="/login">Masuk</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
