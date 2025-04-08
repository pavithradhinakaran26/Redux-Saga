// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// // import { fetchUser } from "../Redux/UserSlice";

// const User = () => {
//   const dispatch = useDispatch();
//   const { users, loading, error } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(fetchUser()); 
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>User List</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default User;


