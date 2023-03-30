import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App.js";
import Profile from "./components/Profile/Profile.jsx";
import ProfileCard from "./components/Profile/ProfileCard.jsx";
import Profiles from "./components/Profile/Profiles.jsx";
import LoginPage from "./Pages/AuthorizationPage/LoginPage";

import EditProfilePage from "./Pages/EditProfilePage/EditProfilePage.jsx";
import MainPage from "./Pages/MainPage/MainPage";
import ProfileDetailsPage from "./Pages/ProfileDetailsPage/ProfileDetailsPage.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx";
import RecsPage from "./Pages/Recs/RecsPage.jsx";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.jsx";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <LoginPage />, id: 1 },
    { link: "/main", element: <MainPage />, id: 2 },
    { link: "/register", element: <RegisterPage />, id: 3 },
    { link: "/profiles", element: <Profiles />, id: 4 },
    { link: "/profile-details/:id", element: <ProfileDetailsPage />, id: 5 },
    { link: "/edit-profile/:id", element: <EditProfilePage />, id: 6 },
    { link: "/profile/:id", element: <ProfilePage />, id: 7 },
    { link: "/recs", element: <RecsPage />, id: 8 },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
