import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      HELLLOOOO
      <Link to="/login">
        <button>login</button>
      </Link>
    </div>
  );
};

export default MainPage;
