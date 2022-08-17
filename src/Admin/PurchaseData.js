import React,{useEffect, useState} from "react";
import { useHistory,Link } from "react-router-dom";
import site_logo from "../images/site_logo.png";
import TextField from "@mui/material/TextField";
import {Api} from "../data/API"

const PurchaseData=()=>{
  
 const history = useHistory()
 const [query, setQuery] = useState("");
 const [datas,setDatas]=useState([]);
console.log(datas);


useEffect(()=>{
  var axios = require('axios');
  var data = '';
  
  var config = {
    method: 'get',
    url: `${Api}/user/purchaseInfo`,
    headers: { 
      "x-auth-token": localStorage.getItem("token"),
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    setDatas(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
},[])

 



  const handleLogout = ()=>{
    window.localStorage.clear()
    history.push("/")
   }

  return(
    <div>
      <nav
        class="navbar navbar-expand-lg  "
        style={{ backgroundColor: "#4b00a2" }}
      >
        <div class="container-fluid">
          <Link to="/"
            style={{ color: "#EEE3FF" }}
            
            className="navbar-brand fs-3 font-clr"
          >
            <img src={site_logo} alt="nav-img" className="mb-2" width="30px" />{" "}
            Better Buys
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/admin-dashboard" class="nav-link active" aria-current="page" href="#">
                  Home
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
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
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
          <h1 className="text-danger"> Purchase Data </h1>

          <div>
            <TextField
              label="Search Name"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>

      <table className="table table-light   table-responsive">
        <thead className="table-responsive">
          <tr>
            <th scope="col"> Sl.No </th>
            <th scope="col"> Image </th>
            <th scope="col">Product Name</th>
            <th scope="col">Invoice Id</th>
            <th scope="col"> categories </th>
            <th scope="col"> Quantity </th>
            <th scope="col"> Total </th>
          </tr>
        </thead>
        <tbody>
          {datas.filter((filt) => filt.name.toLowerCase().includes(query))
            .map(({ name, _id, poster, productType, pincode, quantity ,price}, id) => (
              <tr>
                <th scope="row">{id + 1} </th>
                <td><img src={poster} width="250px" /> </td>
                <td>{name} </td>
                <td>{_id} </td>
                <td>{productType} </td>
                <td> {quantity} </td>
                <td> <b> {`₹ ${price*quantity}`}</b> </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
   
    
  )
}

export default PurchaseData;