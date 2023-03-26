import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signInUser } from "../../store/slices/authSlice";
import googleLogo from "../../imgs/google-logo-icon-png-transparent 1.svg";

const Auth = () => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log(username, password);
    dispatch(signInUser({ username, password }));
  };
  return (
    <div className="auth__card">
      <div className="auth__card-content">
        <div className="auht__card-btns">
          <button className="card-btn active-card-btn" onClick={handleLogin}>
            Войти
          </button>
          <Link to="/register">
            <button className="card-btn">Регистрация</button>
          </Link>
        </div>
        <div className="auth__card-inputs">
          <input
            className="card-input first-input"
            type="email"
            value={username}
            onChange={(e) => setUserame(e.target.value)}
            placeholder="Email"
          />
          <input
            className="card-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="remember-btn">
            <input type="checkbox" id="login-checkbox" />
            <label htmlFor="login-checkbox">Запомнить меня</label>
          </div>
        </div>

        <button className="auth-btn">Войти</button>

        <div className="separator separator-text">или используйте</div>
        <div>
          <button className="google-btn">
            <img className="google-logo" src={googleLogo} alt="goole logo" />
            Goole аккаунт
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
