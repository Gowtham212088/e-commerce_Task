import React, { useState } from "react";
import { products } from "../data/Users";
import CheckIcon from '@mui/icons-material/Check';
import TextField from "@mui/material/TextField";
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';


const ApprovedProducts = () => {

  // ! State Management

  const [query, setQuery] = useState("");

  //! Shorting out values to get approved products.
  const allData = products.filter((elem, index) => {
    return elem.roll == "vendor";
  });
  const items = allData.map((elem) => {
    return elem.product;
  });
  const roundOffData = items.flat();
  const filtItems = roundOffData.filter((elem) => elem.Approvel === true);

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <h1 className="text-danger"> View Products </h1>

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
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">category</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {filtItems
            .filter((filt) => filt.Name.toLowerCase().includes(query))
            .map(({ Name, productType, summary,poster,price,Approvel }, index) => (
              <tr>
                <th scope="row">{index + 1} </th>
                <td> <img src={poster} alt="product-image" width="55px" /> </td>
                <td> <h6>{Name}</h6> </td>
                <td>{productType} </td>
                <td>{summary} </td>
                <td><h4> {price} </h4> </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};


export default ApprovedProducts;
