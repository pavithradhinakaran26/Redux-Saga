// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Register.css";

// // State and city data
// const stateData = ["TamilNadu", "Kerala", "Karnataka", "AndhraPradesh", "Telangana", "Maharashtra", "Gujarat"];
// const cityData = {
//   TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Salem", "Erode", "Trichy"],
//   Kerala: ["Kochi", "Trivandrum", "Kozhikode", "Thrissur", "Alappuzha"],
//   Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum"],
//   AndhraPradesh: ["Vijayawada", "Visakhapatnam", "Guntur", "Nellore"],
//   Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
//   Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
//   Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
// };

// const Register = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const existingUser = location.state?.user || null;

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     state: "",
//     city: "",
//   });

//   // On component mount or when existing user is found, pre-fill form
//   useEffect(() => {
//     if (existingUser) {
//       setFormData(existingUser);
//     }
//   }, [existingUser]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const { name, email, password, state, city } = formData;
//     if (!name || !email || !password || !state || !city) {
//       alert("Please fill all fields");
//       return;
//     }

//     console.log("Submitting form data:", formData);  // Log form data to check if it is correct
    
//     if (existingUser) {
//       // Dispatch action for updating user
//       console.log("Dispatching update action"); // Debugging line
//       dispatch({
//         type: "user/updateUserStart",
//         payload: { userData: formData },
//       });
//     } else {
//       // Dispatch action for registering user
//       console.log("Dispatching register action"); // Debugging line
//       dispatch({
//         type: "user/registerUserStart",
//         payload: { userData: formData },
//       });
//     }

//     // After submitting, navigate to the Table page
//     navigate("/Table"); // Navigate to the Table page after registration or update
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <h2>{existingUser ? "Edit User" : "Register User"}</h2>

//         <form onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             placeholder="Enter Name"
//             onChange={handleChange}
//           />

//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             placeholder="Enter Email"
//             onChange={handleChange}
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             placeholder="Enter Password"
//             onChange={handleChange}
//           />

//           <label>State</label>
//           <select name="state" value={formData.state} onChange={handleChange}>
//             <option value="">Select State</option>
//             {stateData.map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>

//           <label>City</label>
//           <select name="city" value={formData.city} onChange={handleChange}>
//             <option value="">Select City</option>
//             {formData.state &&
//               cityData[formData.state]?.map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//           </select>

//           <button type="submit">{existingUser ? "Update" : "Register"}</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;




import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./Register.css";

const stateData = ["TamilNadu", "Kerala", "Karnataka", "AndhraPradesh", "Telangana", "Maharashtra", "Gujarat"];
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
    if (existingUser) {
      console.log("Existing user found:", existingUser);
      setFormData(existingUser); 
    }
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

    console.log("Submitting form data:", formData);  

    if (existingUser) {
      console.log("Dispatching update action");
      dispatch({
        type: "user/updateUserStart",
        payload: { userData: formData }, 
      });
    } else {
      console.log("Dispatching register action");
      dispatch({
        type: "user/registerUserStart",
        payload: { userData: formData },
      });
    }

   
    navigate("/Table"); 
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>{existingUser ? "Edit User" : "Register User"}</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <label>State</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            {stateData.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <label>City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {formData.state &&
              cityData[formData.state]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>

          <button type="submit">{existingUser ? "Update" : "Register"}</button>
        </form>
      </div>
    </div>
  );
};

export default Register;