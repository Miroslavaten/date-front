import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../store/slices/authSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();

  const registerHandle = () => {
    console.log(username, email, password);
    dispatch(signUpUser({ username, email, password, password2 }));
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="type"
        value={username}
        placeholder="user name"
        onChange={(e) => setUserame(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        value={password2}
        placeholder="password"
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button onClick={registerHandle}>register</button>
    </div>
  );
};

export default Register;
