import React, { useState,useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import { products } from "../data/Users";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AdminNav from "./AdminNav";
import { Api } from "../data/API";
function ViewUser() {
  const [query, setQuery] = useState("");
  const [seller,setSeller] = useState([]);
console.log(seller);
const history = useHistory();


useEffect(()=>{
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'http://localhost:5000/get/allUsersData',
    headers: { 
      'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmYyNzgxMGQxYjQ0YTdhNjlmYzA5ZDUiLCJuYW1lIjoiZ293dGhhbSBrdW1hciBWIiwiZW1haWwiOiJ2Z2s5MDA3QGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImRpc3RyaWN0IjoibWFkdXJhaSIsInBpY3R1cmUiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODkxMzkwMjQ_dj00IiwiaWF0IjoxNjYwNTY3NTAxfQ.2wSbkecdl5mDV0qSrfmHNZdg0H06C6GaKHZ4MJpfA68'
    }
  };
  
  axios(config)
  .then(function (response) {
    setSeller(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
},[])

      
      


  return (
    <div>
      <AdminNav/>
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

      <table className="table table-light  table-responsive">
        <thead className="table-responsive">
          <tr>
            <th scope="col"> Sl.No </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"> Password </th>
            <th scope="col"> Roll </th>
            <th scope="col"> District </th>
            <th scope="col"> Edit </th>
            <th scope="col"> Delete </th>
          </tr>
        </thead>
        <tbody>
          {seller.filter((filt) => filt.name.toLowerCase().includes(query))
            .map(({ name, email, password, role, district }, id) => (
              <tr>
                <th scope="row">{id + 1} </th>
                <td>{name} </td>
                <td>{email} </td>
                <td>{password} </td>
                <td> {role} </td>
                <td> {district} </td>
                
                <td>
                  {" "}
                  <IconButton aria-label="delete" size="large" onClick={()=>history.push(`/users/edit/${id}`)}>
                    {" "}
                    <EditIcon style={{ color: "#0d6efd" }} fontSize="inherit" />
                  </IconButton> 
                </td>
                <td>
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon style={{ color: "red" }} fontSize="inherit" />
                  </IconButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUser;
