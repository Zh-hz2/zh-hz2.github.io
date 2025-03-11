// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Firebase Blog</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          {user ? (
            <>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              <button className="btn btn-danger ms-2" onClick={() => signOut(auth)}>Logout</button>
            </>
          ) : (
            <Link className="nav-link" to="/auth">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
