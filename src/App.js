import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainRoutes from "./MainRoutes";
import MainPage from "./Pages/MainPage/MainPage";
import { checkAuth } from "./redux/features/userSlice/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
