import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Main from "../../components/Main/Main";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Main />
    </div>
  );
};

export default MainPage;
