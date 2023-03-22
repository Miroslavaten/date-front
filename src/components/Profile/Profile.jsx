import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getUserDetails,
  getUsers,
  addUser,
  deleteUser,
} from "../../redux/features/userProfileSlice/userProfileSlice.js";

function Profile() {
  const users = useSelector((state) => state.userProfile.users);
  const { status, error } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getUserDetails({ id: 1 }));
  // }, [users]);

  // const user = useSelector((state) => state.users.user);
  // console.log(users);

  return (
    <div className="Profile">
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <button
        onClick={() => {
          dispatch(addUser({ id: 11, name: "sardor", surname: "timofey" }));
        }}
      >
        Add user
      </button>

      {users.map((user) => (
        <div style={{ display: "flex" }}>
          <h3 onClick={() => dispatch(deleteUser(user.id))} key={user.id}>
            {user.name}
          </h3>
          <Link to={`/profile-details/${user.id}`}>
            <Button>Details</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Profile;
