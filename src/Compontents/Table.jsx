// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Table.css";

// function Table() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleEdit = () => {
//     localStorage.setItem("editUser", JSON.stringify(user));
//     navigate("/register");
//   };

//   const handleDelete = async () => {
//     if (window.confirm("Are you sure you want to delete your account?")) {
//       try {
//         await fetch(
//           `https://67e4fa6218194932a583ee55.mockapi.io/User/${user.id}`,
//           { method: "DELETE" }
//         );
//         localStorage.removeItem("user");
//         setUser(null);
//       } catch (err) {
//         console.error("Error deleting user:", err);
//       }
//     }
//   };

//   return (
//     <div className="table-container">
//       <h2>User Details</h2>

//       {user ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Gender</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.gender}</td>
//               <td>{user.city}</td>
//               <td>{user.state}</td>
//               <td>
//                 <div className="button-group">
//                   <button className="edit-btn" onClick={handleEdit}>Edit</button>
//                   <button className="delete-btn" onClick={handleDelete}>Delete</button>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       ) : (
//         <h3 className="no-user">No User Found! Please Register.</h3>
//       )}
//     </div>
//   );
// }

// export default Table;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";

function Table() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the logged-in user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user to state
    } else {
      navigate("/login"); // If no user, redirect to login page
    }
  }, [navigate]);

  // Handle edit action
  const handleEdit = () => {
    localStorage.setItem("editUser", JSON.stringify(user)); // Store current user for edit
    navigate("/register"); // Navigate to register page for edit
  };

  // Handle delete action
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await fetch(
          `https://67e4fa6218194932a583ee55.mockapi.io/User/${user.id}`,
          { method: "DELETE" }
        );
        localStorage.removeItem("user"); // Remove user from localStorage after delete
        setUser(null); // Clear user data
        navigate("/login"); // Redirect to login page
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  return (
    <div className="table-container">
      <h2>User Details</h2>

      {user ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>City</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>
                <div className="button-group">
                  <button className="edit-btn" onClick={handleEdit}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h3 className="no-user">No User Found! Please Register.</h3>
      )}
    </div>
  );
}

export default Table;




