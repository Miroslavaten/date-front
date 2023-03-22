import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  editUserDetails,
  getUserDetails,
} from "../../redux/features/userProfileSlice/userProfileSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userDetails = useSelector((state) => state.userProfile.userDetails);
  const [updatedUser, setUpdatedUser] = useState(userDetails);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserDetails(params.id));
  }, [dispatch]);

  useEffect(() => {
    setUpdatedUser(userDetails);
  }, [userDetails]);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(editUserDetails(updatedUser));
    navigate("/profile");
  };

  console.log(userDetails, "userDetails");
  console.log(updatedUser, "updatedUserDetails");

  return (
    <div>
      <TextField onChange={handleChange} value={updatedUser.name} name="name" />
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default EditProfile;
