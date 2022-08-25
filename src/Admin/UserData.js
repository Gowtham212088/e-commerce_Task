import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ReorderIcon from '@mui/icons-material/Reorder';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import { products } from "../data/Users";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import AdminNav from "./AdminNav";
import site_logo from "../images/site_logo.png";
import { Api } from "../data/API";
import { green } from "@mui/material/colors";
import { LinearProgress } from "@mui/material";
import { ThreeCircles } from  'react-loader-spinner'

function UserData() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [datas,setDatas]=useState([]);
console.log(datas);
   console.log(datas);

  const history = useHistory();

  const handleLogout = ()=>{
    window.localStorage.clear()
    history.push("/")
   }


   useEffect(()=>{

    var axios = require('axios');
    var data = JSON.stringify({"userId": "5654654646484245"
    });
    
    var config = {
      method: 'get',
      url: `${Api}/user/getInfo`,
      headers: { 
        "x-auth-token": localStorage.getItem("token"),
         'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      setDatas(response.data);
      setIsLoading(false);
    })
    .catch(function (error) {
      console.log(error);
    });
   },[])

  return (
    <div>
       <nav
        class="navbar navbar-expand-lg  "
        style={{ backgroundColor: "#4b00a2" }}
      >
        <div class="container-fluid">
          <a
            style={{ color: "#EEE3FF" }}
            onClick={() => history.push("/")}
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
                    <a onClick={handleLogout} class="dropdown-item" href="#">
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
          <h1 className="text-danger"> View User </h1>

          <div>
            <TextField
              label="Search Name"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>

   <div className="table-responsive">
      <table className="table table-light">
        <thead className="table-responsive">
          <tr>
            <th scope="col"> Sl.No </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"> country </th>
            <th scope="col"> city </th>
            <th scope="col"> Address </th>
            <th scope="col"> pincode </th>
            <th scope="col"> Money Spent  </th>
          </tr>
        </thead>
        <tbody>
          {datas.filter((filt) => filt.name.toLowerCase().includes(query))
            .map(({ name, email, Address, country, city, pincode, money_spent }, id) => (
              <tr>
                <th scope="row">{id + 1} </th>
                
                <td>{name} </td>
                <td>{email} </td>
                <td>{country} </td>
                <td>{city} </td>
                <td>{Address} </td>
                <td> {pincode} </td>
                <td> <b style={{color:"green"}}>{`₹ ${money_spent}`} </b> </td>

               
              </tr>
            ))}
        </tbody>
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
}

export default UserData;
