import React, { useEffect, useState } from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import add_to_cart from "../images/add_to_cart.png";
import onlineShopping from "../images/onlineShopping.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import user from "../images/user.png";
import login from "../images/login.png";
import AdminNav from "./AdminNav";
import axios from "axios";
import { Api } from "../data/API";
import { Link, useHistory } from "react-router-dom";
import site_logo from "../images/site_logo.png";
import CheckIcon from "@mui/icons-material/Check";
import { ThreeCircles } from  'react-loader-spinner'


const SignUp = () => {

const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  console.log(product);

  const updateProduct = (id) => {
    fetch(`${Api}/approve/seller/${id}`, {
      method: "PUT",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }).then(() => getStudents()).then(()=>history.push('/viewUser'));
  };

  const getStudents = () => {
    fetch(`${Api}/get/pendingUser`, {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((data) => data.json())
      
      .then((response) => setProduct(response));
  };

  useEffect(() => {
    setIsLoading(false);
    getStudents();
  }, []);

 const handleLogout = ()=>{
  window.localStorage.clear()
  history.push("/")
 }

const [query,setQuery]=useState("")

   return (
    <div className="signUp">
     <nav
        class="navbar navbar-expand-lg  "
        style={{ backgroundColor: "#4b00a2" }}
      >
        <div class="container-fluid">
          <a
            style={{ color: "#EEE3FF" }}
            onClick={() => history.push("/admin-dashboard")}
            className="navbar-brand fs-3 font-clr"
          >
            <img src={site_logo} alt="nav-img" className="mb-2" width="30px" />{" "}
            Better Buys
          </a>
          <button
        style={{backgroundColor:"#EEE3FF",border:"2px solid #4B00A2"}}
        class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"> <ReorderIcon style={{color:"#4b00a2"}}/> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/admin-dashboard" class="nav-link active" aria-current="page" href="#">
                  Dashboard
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                 
                  <li>
                    <a class="dropdown-item" href="#">
                    Admin Profile
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <h1 className="text-danger"> Approve Seller </h1>

          <div>
            <TextField
              label="Search Name"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-light  table-responsive">
          <thead>
            <tr>
              <th scope="col"> Sl.No </th>
              <th scope="col">Poster</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"> Seller Id </th>
              <th scope="col"> Password </th>
              <th scope="col"> Approval </th>
            </tr>
          </thead>
        
            {product
              .filter((filt) => filt.name.includes(query))
              .map(({ name,email,password,userDp,_id }, id) => (
                <tr>
                  <th scope="row">{id + 1} </th>
                  <td>
                    <img style={{borderRadius:"15%",objectFit:"contain"}} src={userDp} width="125px" height="125px" />{" "}
                  </td>
                  <td>{name} </td>
                  <td>{email} </td>
                  <td>{_id} </td>
                  <td>{password} </td>
                  <td>
                    {" "}
                    <Button
                      onClick={() => updateProduct(id)}
                      color="success"
                      variant="outlined"
                    >
                      Approve{" "}
                      <CheckIcon
                        color="success"
                        style={{ color: "green" }}
                        fontSize="large"
                      />
                    </Button>
                  </td>
                </tr>
              ))}
          
        </table>
        {isLoading && (
        <div className="d-flex justify-content-center text-center mt-5">
          {/* loader */}
          <ThreeCircles
  height="200"
  width="200"
  color="#4B00A2"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default SignUp;
