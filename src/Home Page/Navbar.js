import React from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from '@mui/material/Badge';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent border-bottom border-3 nav-border fw-bold">
      <div className="container-fluid ">
        <a className="navbar-brand fs-3 font-clr">Navbar</a>
        <button
          className="navbar-toggler border-"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
              <a className="nav-link active fs-4 font-clr me-2">
               Login
              </a>
            </li> 

            <li className="nav-item">
              <a className="nav-link active fs-4 font-clr me-5"> Sign Up </a>
            </li>
           
          </ul>
          <div className="d-flex"> 
            <button className="btn btn-outline text-light nav-btn " type="submit">
          <Badge badgeContent={4} color="primary">  <AddShoppingCartIcon  /> </Badge> Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
