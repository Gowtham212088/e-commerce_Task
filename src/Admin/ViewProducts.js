import React,{useState} from "react";
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import TextField from "@mui/material/TextField";
import ClearIcon from '@mui/icons-material/Clear';
import {products} from "../data/Users";

const ViewProducts = ()=>{

  const items = products.find((elem)=>{
    return elem.name === "Gowtham"
})
//  .product.map((elem,ind)=>{
   
//  })
const [query,setQuery]=useState()

    return(
        <div>
      <div class="card">
        <div class="card-body d-flex justify-content-between">

        <h1 className="text-danger"> View Products </h1>

       <div> 
        <TextField
        label="Search Name"
        onChange={(event) => setQuery(event.target.value)}
        />
        </div>

        </div>
      </div>

     

      <table class="table table-light  table-responsive">
        <thead className="table-responsive">
          <tr>
            <th scope="col"> Sl.No </th>
            <th scope="col">Poster</th>
            <th scope="col">Name</th>
            <th scope="col"> Description </th>
            <th scope="col"> Approval </th>
          </tr>
        </thead>
        <tbody>
          {items.product.filter((filt)=>filt.Name.toLowerCase().includes(query))
          .map(({ poster, Name,summary}, index) => (
            <tr>
              <th scope="row">{index + 1} </th>
              <td><img src={poster} width="125px"/> </td>
              <td>{Name} </td>
              <td>{summary} </td>
              <td >
                {" "}
                <Button variant="outlined">Outlined
                  {" "}
                  <CheckIcon style={{ color: "#0d6efd" }} fontSize="inherit" />
                  </Button>
                  <Button variant="outlined">Outlined
                  <ClearIcon style={{ color: "red" }} fontSize="inherit" />
                </Button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default ViewProducts;