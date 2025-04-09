


// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginRequest } from "../Redux/AuthSlice";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// function Login() {
//   const [userName, setUserName] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [successMessage] = useState("");

//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.user || {});

//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (!userName.trim() || !userPassword.trim()) {
//       alert("Please enter Name and Password.");
//       return;
//     }

//     dispatch(loginRequest({ username: userName.trim(), password: userPassword.trim() }));

//     setTimeout(() => {
//       navigate("/Table");  // After login -> navigate to Table page
//     }, 2000);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <input
//           type="text"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           placeholder="Enter Name"
//         />
//         <input
//           type="password"
//           value={userPassword}
//           onChange={(e) => setUserPassword(e.target.value)}
//           placeholder="Enter Password"
//         />
//         <button onClick={handleLogin} disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         {error && <p className="error-message">{error}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}

//         <p>
//           Don't have an account? <a href="/register">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;



import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user || {});  

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!userName.trim() || !userPassword.trim()) {
      alert("Please enter Name and Password.");
      return;
    }

    dispatch(loginRequest({ username: userName.trim(), password: userPassword.trim() }));

    setTimeout(() => {
      navigate("/Table");
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Name"
        />

        <input
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="error-message">{error}</p>}

        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

