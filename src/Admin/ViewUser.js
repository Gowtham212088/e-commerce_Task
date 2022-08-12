import React, { useState,useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import { products } from "../data/Users";
import axios from "axios";
import { useHistory } from "react-router-dom";


function ViewUser() {
  const [query, setQuery] = useState("");
  const [pro,setPro] = useState([]);

const history = useHistory();

  return (
    <div>
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
          {products.filter((filt) => filt.name.toLowerCase().includes(query))
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
