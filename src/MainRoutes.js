import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App.js";
import Profile from "./components/Profile/Profile.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/editUserDetails/:id" element={<Profile />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default MainRoutes;
