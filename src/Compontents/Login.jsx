



import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();

  // Get the redux state for loading, error, and userData
  const { loading, error, userData } = useSelector((state) => state.auth || {});

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!userName.trim() || !userPassword.trim()) {
      alert("Please enter Name and Password.");
      return;
    }

    // Dispatch login action
    dispatch(loginRequest({ username: userName.trim(), password: userPassword.trim() }));
  };

  useEffect(() => {
    if (userData) {
      console.log("Login successful, navigating to Table page"); // Debug log
      navigate("/Table");
    } else if (error) {
      console.log("Login error:", error); // Debug log if there's an error
    }
  }, [userData, error, navigate]);

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




// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginRequest } from "../Redux/AuthSlice";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// function Login() {
//   const [userName, setUserName] = useState("");
//   const [userPassword, setUserPassword] = useState("");

//   const dispatch = useDispatch();

//   // Correct ah redux state eduthuradhu
//   const { loading, error, userData } = useSelector((state) => state.auth || {});

//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (!userName.trim() || !userPassword.trim()) {
//       alert("Please enter Name and Password.");
//       return;
//     }

//     dispatch(loginRequest({ username: userName.trim(), password: userPassword.trim() }));
//   };

//   useEffect(() => {
//     if (userData) {
//       navigate("/Table");
//     }
//   }, [userData, navigate]);
  

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

//         <p>
//           Don't have an account? <a href="/register">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
