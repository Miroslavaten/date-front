import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      LOGIN
      <Link to="/register">
        <button>register</button>
      </Link>
    </div>
  );
};

export default LoginPage;
