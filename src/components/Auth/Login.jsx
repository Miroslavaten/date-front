import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserId,
  signInUser,
  signUpUser,
} from "../../redux/features/userSlice/authSlice";
import googleLogo from "../../imgs/google-logo-icon-png-transparent 1.svg";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import { getUserDetails } from "../../redux/features/userProfileSlice/userProfileSlice";
import { useEffect } from "react";

const Auth = () => {
  const [showForm, setShowForm] = useState(true);
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user_id = useSelector((state) => state.auth.user_id);
  const hasProfile = useSelector((state) => state.userProfile.hasProfile);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.userProfile.userDetails);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    dispatch(signInUser({ username, password }));
    if (user) {
      console.log(user);
      navigate("/");
    } else {
      navigate("/register");
    }
  };

  const handleGetDetails = async () => {
    try {
      await dispatch(
        getUserDetails({
          id: user_id,
        })
      );
      // navigate("/");
    } catch (error) {
      // navigate("/register");
    }
  };

  useEffect(() => {
    dispatch(getUserId());
  }, [token]);

  useEffect(() => {
    // handleGetDetails();
    dispatch(getUserDetails({ id: user_id }));
    // hasProfile ? navigate("/") : navigate("/register");
  }, [user_id]);

  // useEffect(() => {
  //   hasProfile ? navigate("/") : navigate("/register");
  // }, [hasProfile]);

  const registerHandle = () => {
    console.log(username, email, password);
    if (password !== password2) {
      alert("passwords are not match");
      return;
    }

    dispatch(signUpUser({ username, email, password, password2 }));
    navigate("");
  };

  return (
    <div className="auth__card">
      <div className="auth__card-content">
        <div className="auht__card-btns">
          <button
            className={`card-btn ${!showForm ? "active-card-btn" : null} `}
            onClick={() => setShowForm(false)}
          >
            Войти
          </button>
          <button
            onClick={() => setShowForm(true)}
            className={`card-btn ${showForm ? "active-card-btn" : null} `}
          >
            Регистрация
          </button>
        </div>
        <div className="auth__card-inputs">
          {/* <input
            className="card-input first-input"
            type="email"
            value={username}
            onChange={(e) => setUserame(e.target.value)}
            placeholder="Email"
          /> */}
          {/* <input
            className="card-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          /> */}
          {showForm ? (
            <FormControl sx={{ mt: "24px" }} variant="outlined">
              <InputLabel
                sx={{ fontSize: "15px" }}
                htmlFor="outlined-adornment-password"
              >
                Email
              </InputLabel>
              <OutlinedInput
                sx={{
                  height: "43px",
                  width: "293px",
                  borderRadius: "10px",
                }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="outlined-adornment-password"
                type="text"
                label="Email"
              />
            </FormControl>
          ) : null}
          <FormControl sx={{ mt: "24px" }} variant="outlined">
            <InputLabel
              sx={{ fontSize: "15px" }}
              htmlFor="outlined-adornment-password"
            >
              Username
            </InputLabel>
            <OutlinedInput
              sx={{
                height: "43px",
                width: "293px",
                borderRadius: "10px",
              }}
              onChange={(e) => setUserame(e.target.value)}
              value={username}
              id="outlined-adornment-password"
              type="text"
              label="Username"
            />
          </FormControl>

          <FormControl sx={{ mt: "24px" }} variant="outlined">
            <InputLabel
              sx={{
                fontSize: "15px",
              }}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              sx={{
                height: "43px",
                width: "293px",
                borderRadius: "10px",
              }}
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
          {showForm ? (
            <FormControl sx={{ mt: "24px" }} variant="outlined">
              <InputLabel
                sx={{
                  fontSize: "15px",
                }}
                htmlFor="outlined-adornment-password"
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                sx={{
                  height: "43px",
                  width: "293px",
                  borderRadius: "10px",
                }}
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
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
                label="Confirm Password"
              />
            </FormControl>
          ) : null}
        </div>
        <div className="remember-btn">
          <FormControlLabel
            control={<Checkbox size="small" defaultChecked />}
            label={
              <span style={{ fontSize: "14px", color: "rgba(38, 38, 38, 1)" }}>
                Запомнить меня
              </span>
            }
          />
        </div>
        {!showForm ? (
          <button onClick={handleLogin} className="auth-btn">
            Войти
          </button>
        ) : (
          <button onClick={registerHandle} className="auth-btn">
            Регистрация
          </button>
        )}

        <div className="separator separator-text">или используйте</div>
        <div>
          <button className="google-btn">
            <img className="google-logo" src={googleLogo} alt="goole logo" />
            Google аккаунт
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
