import React from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent nav-border fw-bold">
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
               
               {/*CODE FOR BOOTSTRAP MODAL (SIGN IN)  */}

            <a class="nav-link active fs-4 font-clr me-5" data-bs-toggle="modal" href="#exampleModalToggle" > Login </a>
            </li>
 <li className="nav-item">
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <h3 className="d-flex  justify-content-center loginRole-text"> Choose Login Role </h3>
      </div>
      <div class="modal-footer d-flex justify-content-around">
      <Button style={{backgroundColor:"#4b00a2"}} className="mt-1" variant="contained" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> <AdminPanelSettingsIcon className="ms-1 "/> Admin Login  </Button>
        <Button style={{backgroundColor:"#4b00a2"}} className="mt-1" variant="contained" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> <AddBusinessIcon className="ms-1"/> Vendor's Login </Button>
      </div>
    </div>
  </div>
</div>

{/* SignUp  */}

              <a className="nav-link active fs-4 font-clr me-5"> Sign Up </a>
            </li>
          </ul>
          <div className="d-flex">
            {/* <button
              className="btn btn-outline text-light nav-btn "
              type="submit"
            >
              <Badge badgeContent={4} color="primary">
                {" "}
                <AddShoppingCartIcon />{" "}
              </Badge>{" "}
              Cart
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
