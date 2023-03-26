import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Auth/Login";

const LoginPage = () => {
  return (
    <div>
      LOGIN
      <Login />
      {/* <Link to="/register">
        Don`t have an account <button>Sign up</button>
      </Link> */}
    </div>
  );
};

export default LoginPage;
