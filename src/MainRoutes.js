import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/AuthorizationPage/LoginPage";
import RegisterPage from "./Pages/AuthorizationPage/RegisterPage";
import MainPage from "./Pages/MainPage/MainPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default MainRoutes;
