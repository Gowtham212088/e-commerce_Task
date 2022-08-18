import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import site_logo from "../images/site_logo.png";
import { Api } from "../data/API";
import axios from "axios";

const AddProduct = () => {
  const history = useHistory();

  //! State Management
  const [name, setName] = useState("");

  const [category, setCategories] = useState("");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const [image, setImage] = useState("");

  //! Image Processing
  //? Base 64 Code for image uploading.
  let base64code = "";
  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
    console.log(fileString);
    setImage(fileString);
    this.base64code = fileString;
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  // authtoken localStorage
  const authToken = window.localStorage.getItem("token");

  // get Id from authToken
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = decodeURIComponent(
      atob(base64Url)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(base64);
  }

  let a = parseJwt(authToken);
  let userId = a._id;

  const handleSubmit = (event) => {
    event.preventDefault();

    const values = {
      name: name,
      userId: userId,
      productType: category,
      summary: description,
      price: price,
      poster: image,
      Approvel: false,
    };
    console.log(values);

    axios
      .post(`${Api}/request/products`, values)
      .then((res) => {
        console.log(res.data);
      }).then(()=>history.push('/MyProducts'))
      .catch((error) => {
        console.error(error);
      });
    setName("");
    setPrice("");
    setDescription("");
    setCategories("");
    setImage("");
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  const categories = [
    {
      value: "laptop",
      label: "laptop",
    },
    {
      value: "mobile",
      label: "mobile",
    },
    {
      value: "mobile accessories",
      label: "mobile accessories",
    },
    {
      value: "laptop accessories",
      label: "laptop accessories",
    },
    {
      value: "smart watches",
      label: "smart watches",
    },
  ];

  //! Change Handlers

  const handleCategory = (event) => {
    setCategories(event.target.value);
  };
  // console.log({ District: District, role: role });
  return (
    <div className="signUp">
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
                <Link
                  to="/vendor-dashboard"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
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

      <div className="signUp-parent">
        <div className="col-sm-5 col-md-5 col-lg-5 d-flex flex-column addProduct-col">
          <h1 className="Add-user d-flex fs-1 justify-content-center mb-3">
            Add Product{" "}
          </h1>
          <TextField
            type="text"
            name="name"
            value={name}
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Product name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="text"
            value={description}
            name="Description"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            type="text"
            name="price"
            value={price}
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Price"
            variant="outlined"
            onChange={(e) => setPrice(e.target.value)}
          />

          <TextField
            className="mt-4 me-4 ms-4"
            id="outlined-select-currency"
            select
            label="category"
            value={category}
            onChange={handleCategory}
            helperText="Please select your Role"
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            type="file"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            variant="outlined"
            onChange={onChange}
          />

          <TextField
            type="url"
            value={image}
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            variant="outlined"
            label="image-url"
            onChange={(e) => setImage(e.target.value)}
          />

          <Button
            type="button"
            onClick={handleSubmit}
            className="mt-5 pt-2 pb-2 me-5 ms-5"
            variant="contained"
            style={{ backgroundColor: "#4b00a2", padding: "0" }}
          >
            Create Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
