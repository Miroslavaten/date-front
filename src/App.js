import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import {
  getUserDetails,
  getUsers,
  addUser,
  deleteUser,
} from "./redux/features/userSlice/userSlice";

function App() {
  const users = useSelector((state) => state.users.users);
  const { status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getUserDetails({ id: 1 }));
  // }, [users]);

  // const user = useSelector((state) => state.users.user);
  // console.log(user);

  return (
    <div className="App">
      <Link to={"/"}>
        <Button>Home</Button>
      </Link>
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
          {/* <Link to={`/editUserDetails/${user.id}`}>
            <Button>Edit</Button>
          </Link> */}
        </div>
      ))}
      <MainRoutes />
    </div>
  );
}

export default App;
