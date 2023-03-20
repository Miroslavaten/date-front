import React from "react";
import { Link } from "react-router-dom";
import Register from "../../components/Auth/Register";

const RegisterPage = () => {
  return (
    <div>
      REGISTER
      <Register />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
