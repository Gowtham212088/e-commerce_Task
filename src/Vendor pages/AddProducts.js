import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import site_logo from "../images/site_logo.png";
import { Api } from "../data/API";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import shopkeeper from "../images/shopkeeper.png";
import shipping from "../images/shipping.png";

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
      })
      .then(() => history.push("/MyProducts"))
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
    {
      value: "Computer Peripherals",
      label: "Computer Peripherals",
    },
    {
      value: "Computer Accessories",
      label: "Computer Accessories",
    },
  ];

  //! Change Handlers

  const handleCategory = (event) => {
    setCategories(event.target.value);
  };

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
      <div
        style={{
          backgroundColor: "#EEE3FF",
          height: "100vh",
          marginTop: "0px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={shipping} width="120px" />
            <h2 style={{ color: "#3900A2" }} component="h1" variant="h5">
              Sell your products
            </h2>
            <form
              onSubmit={handleSubmit}
              component="form"
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    value={name}
                    required
                    type="text"
                    fullWidth
                    id="Product_Name"
                    label="Product_Name"
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    required
                    fullWidth
                    value={description}
                    label="Description"
                    autoComplete="family-name"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={price}
                    type="number"
                    label="Price"
                    autoComplete="email"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Grid>

                <Grid
                  style={{ display: "flex", justifyContent: "start" }}
                  item
                  xs={12}
                >
                  <TextField
                    className="col-12"
                    id="outlined-select-currency"
                    select
                    label="Category"
                    value={category}
                    onChange={handleCategory}
                    helperText="Please select your currency"
                  >
                    {categories.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="file"
                    autoComplete="new-password"
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={image}
                    name="password"
                    label="image_url"
                    type="url"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                style={{ backgroundColor: "#3900A2" }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Request
              </Button>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default AddProduct;
