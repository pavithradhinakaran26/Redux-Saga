import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../Redux/AuthSlice";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom"; 
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, userData } = useSelector((state) => state.auth || {}); 

  const handleLogin = () => {
    console.log("Login requested with", userName, userPassword); 
    if (!userName.trim() || !userPassword.trim()) {
      alert("Please enter Name and Password.");
      return;
    }
    dispatch(loginRequest({ username: userName.trim(), password: userPassword.trim() }));
  };

  useEffect(() => {
    console.log("userData:", userData);  
    if (userData && !loading) { 
      console.log("Login success, navigating to Table...");
      navigate("/Table");  
    } else if (error) {
      alert("Login failed, please try again.");
    }
  }, [userData, navigate, loading, error]);

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