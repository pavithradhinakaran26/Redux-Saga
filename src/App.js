import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Login from "./Compontents/Login";
import Table from "./Compontents/Table";
import Register from "./Compontents/Register";
import User from "./Compontents/User";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Table" element={<Table />} />

        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;






