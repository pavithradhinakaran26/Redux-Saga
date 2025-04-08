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
//           {
//             method: "DELETE",
//           }
//         );
//         localStorage.removeItem("user"); 
//         setUser(null); 
//       } catch (err) {
//         console.error("Error deleting user:", err);
//       }
//     }
//   };

//   if (!user) {
//     return <h2 className="no-user">No User Found! Please Register.</h2>;
//   }

//   return (
//     <div className="table-container">
//       <h2>User Details</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Gender</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//             <td>{user.gender}</td>
//             <td>{user.city}</td>
//             <td>{user.state}</td>
//             <td>
//               <div className="button-group">
//                 <button className="edit-btn" onClick={handleEdit}>Edit</button>
//                 <button className="delete-btn" onClick={handleDelete}>Delete</button>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
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
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleEdit = () => {
    localStorage.setItem("editUser", JSON.stringify(user));
    navigate("/register");
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await fetch(
          `https://67e4fa6218194932a583ee55.mockapi.io/User/${user.id}`,
          { method: "DELETE" }
        );
        localStorage.removeItem("user");
        setUser(null);
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
                  <button className="edit-btn" onClick={handleEdit}>Edit</button>
                  <button className="delete-btn" onClick={handleDelete}>Delete</button>
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

