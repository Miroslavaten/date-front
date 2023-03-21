import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../redux/features/userSlice/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userDetails = useSelector((state) => state.users.userDetails);
  const [updatedUser, setUpdatedUser] = useState(userDetails);

  // useEffect(() => {
  //   getUserDetails(params.id);
  // }, [dispatch]);

  // useEffect(() => {
  //   setUpdatedUser(userDetails);
  // }, [userDetails]);

  // console.log(userDetails, "userDetails");
  // console.log(updatedUser, "updatedUserDetails");

  return (
    <div>
      <TextField />
      <Button>Save</Button>
    </div>
  );
};

export default Profile;
