import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
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
  const [addBtn, setAddBtn] = useState(false);
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="Profile">
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <button
        // onClick={() => {
        //   dispatch(addUser({ id: 11, name: "sardor", surname: "timofey" }));
        // }}
        onClick={() => setAddBtn(!addBtn)}
      >
        Add user
      </button>

      {addBtn && (
        <div>
          <TextField value={newUser.name} name="name" onChange={handleChange} />
          <TextField
            value={newUser.surname}
            name="surname"
            onChange={handleChange}
          />
          <Button
            onClick={() => {
              dispatch(addUser(newUser));
            }}
          >
            Submit
          </Button>
        </div>
      )}

      {users.map((user) => (
        <div style={{ display: "flex" }}>
          <h3>{user.name}</h3>
          <Link to={`/profile-details/${user.id}`}>
            <Button>Details</Button>
          </Link>
          <Button onClick={() => dispatch(deleteUser(user.id))} key={user.id}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Profile;
