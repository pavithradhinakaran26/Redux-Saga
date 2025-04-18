import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../Redux/AuthSlice"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, userData } = useSelector((state) => state.auth || {}); // Fetch auth state from Redux

  // Handle Login Request
  const handleLogin = () => {
    dispatch(loginRequest({ username: userName.trim(), password: userPassword.trim() }));
  };

  useEffect(() => {
    if (userData && !loading) {
      console.log("Login success, storing user data in localStorage...");
      localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
      navigate("/table"); // Navigate to the Table page
    } else if (error) {
      alert("Login failed, please try again.");
    }
  }, [userData, navigate, loading, error]); // Dependency to watch for changes

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
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
