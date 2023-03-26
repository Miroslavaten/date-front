import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signInUser } from "../../redux/features/userSlice/authSlice";
import googleLogo from "../../imgs/google-logo-icon-png-transparent 1.svg";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Auth = () => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log(username, password);
    dispatch(signInUser({ username, password }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          {/* <input
            className="card-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          /> */}
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
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
