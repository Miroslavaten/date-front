import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserDetails } from "../../redux/features/userProfileSlice/userProfileSlice";

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userDetails = useSelector((state) => state.userProfile.userDetails);
  const { status, error } = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(getUserDetails({ id: params.id }));
  }, [dispatch]);

  console.log(userDetails);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <div>
        <Typography variant="h4">{userDetails.name}</Typography>
        <Link to={`/edit-profile/${params.id}`}>
          <Button>Edit</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetails;
