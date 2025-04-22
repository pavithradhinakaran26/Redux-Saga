import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./Register.css";

const stateData = [
  "TamilNadu", "Kerala", "Karnataka", "AndhraPradesh", "Telangana", "Maharashtra", "Gujarat"
];

const cityData = {
  TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Salem", "Erode", "Trichy"],
  Kerala: ["Kochi", "Trivandrum", "Kozhikode", "Thrissur", "Alappuzha"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum"],
  AndhraPradesh: ["Vijayawada", "Visakhapatnam", "Guntur", "Nellore"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
};

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser = location.state?.user || null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    if (existingUser) setFormData(existingUser);
  }, [existingUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, state, city } = formData;
    if (!name || !email || !password || !state || !city) {
      alert("Please fill all fields");
      return;
    }

    if (existingUser) {
      dispatch({
        type: "user/registerUserStart",
        payload: { userData: formData, navigate },
      });
      
    } else {
      dispatch({
        type: "user/registerUserStart",
        payload: { userData: formData, navigate },
      });
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>{existingUser ? "Edit User" : "Register User"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} />
          <label>Password</label>
          <input name="password" type="password" value={formData.password} onChange={handleChange} />

          <label>State</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            {stateData.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <label>City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {formData.state && cityData[formData.state]?.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <button type="submit">{existingUser ? "Update" : "Register"}</button>
        </form>
      </div>
    </div>
  );
};

export default Register;