import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import { products } from "../data/Users";
import Button from "@mui/material/Button";
import App from "../App";

const MyProducts = () => {
  const items = products
    .find((elem) => {
      return elem.name == "Gowtham";
    })
    .product.filter((fill) => {
      return fill.Approvel === false || true;
    });

  // ?  Conditional rendering

  const condRendering = items.map((element) => {
    return element.Approvel;
  });

  const [query, setQuery] = useState("");

  return (
    <div>
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
            <th scope="col">Poster</th>
            <th scope="col">Name</th>
            <th scope="col"> Description </th>
            <th scope="col"> Approvel </th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter((filt) => filt.Name.toLowerCase().includes(query))
            .map(({ poster, Name, summary, Approvel }, index) => (
              <tr>
                <th scope="row">{index + 1} </th>
                <td>
                  <img src={poster} width="125px" />{" "}
                </td>
                <td>{Name} </td>
                <td>{summary} </td>
                <td>
                  <h2> {Approvel ? "Approved" : "Pending"} </h2>{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
