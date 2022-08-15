import React, { useEffect, useState } from "react";
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


const SignUp = () => {

const history = useHistory();

  //! This is for District Dropdown
  const Districs = [
    {
      value: "Ariyalur",
      label: "Ariyalur",
    },
    {
      value: "Chengalpattu",
      label: "Chengalpattu",
    },
    {
      value: "Chennai",
      label: "Chennai",
    },
    {
      value: "Coimbatore",
      label: "Coimbatore",
    },
    {
      value: "Cuddalore",
      label: "Cuddalore",
    },
    {
      value: "Dharmapuri",
      label: "Dharmapuri",
    },
    {
      value: "Dindigul",
      label: "Dindigul",
    },
    {
      value: "Erode",
      label: "Erode",
    },
    {
      value: "Kallakurichi",
      label: "Kallakurichi",
    },
    {
      value: "Kanchipuram",
      label: "Kanchipuram",
    },
    {
      value: "Kanyakumari",
      label: "Kanyakumari",
    },
    {
      value: "Karur",
      label: "Karur",
    },
    {
      value: "Krishnagiri",
      label: "Krishnagiri",
    },
    {
      value: "Madurai",
      label: "Madurai",
    },
    {
      value: "Nagapattinam",
      label: "Nagapattinam",
    },

    {
      value: "Namakkal",
      label: "Namakkal",
    },
    {
      value: "Nilgiris",
      label: "Nilgiris",
    },
    {
      value: "Perambalur",
      label: "Perambalur",
    },
    {
      value: "Pudukkottai",
      label: "Pudukkottai",
    },
    {
      value: "Ramanathapuram",
      label: "Ramanathapuram",
    },
    {
      value: "Ranipet",
      label: "Ranipet",
    },
    {
      value: "Salem",
      label: "Salem",
    },
    {
      value: "Sivaganga",
      label: "Sivaganga",
    },
    {
      value: "Tenkasi",
      label: "Tenkasi",
    },
    {
      value: "Thanjavur",
      label: "Thanjavur",
    },
    {
      value: "Theni",
      label: "Theni",
    },
    {
      value: "Thoothukudi",
      label: "Thoothukudi",
    },
    {
      value: "Tiruchirappalli",
      label: "Tiruchirappalli",
    },
    {
      value: "Tirunelveli",
      label: "Tirunelveli",
    },
    {
      value: "Tirupathur",
      label: "Tirupathur",
    },
    {
      value: "Tiruppur",
      label: "Tiruppur",
    },
    {
      value: "Tiruvallur",
      label: "Tiruvallur",
    },
    {
      value: "Tiruvannamalai",
      label: "Tiruvannamalai",
    },
    {
      value: "Tiruvarur",
      label: "Tiruvarur",
    },
    {
      value: "Vellore",
      label: "Vellore",
    },
    {
      value: "Viluppuram",
      label: "Viluppuram",
    },
    {
      value: "Virudhunagar",
      label: "Virudhunagar",
    },
  ];

  //! This is for Role Dropdown

  const Role = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Vendor",
      label: "Vendor",
    },
  ];
  //! State Management
  const [district, setdistrict] = useState("");

  const [role, setRole] = useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [image, setImage] = useState("");

  // const [message,setMessage] = useState("")

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

 const handleLogout = ()=>{
  window.localStorage.clear()
  history.push("/")
 }

  //! Change Handlers
const handleSubmit = (e) => {
    e.preventDefault();
    // setdistrict("")
    // setRole("")
    // setEmail("")
    // setName("")
    // setPassword("")
    // setImage("")
    // setMessage("")
    const signUpData = {
      name:name,
      email:email,
      password:password,
      image:image,
      role:role,
      district:district
    }
    axios.post(`${Api}/create/users`,signUpData ,{
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
    setdistrict("")
    setRole("")
    setName("")
    setEmail("")
    setPassword("")
    setImage("")
};

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const handleChangeDistrict = (event) => {
    setdistrict(event.target.value);
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
            onClick={() => history.push("/admin-dashboard")}
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
      
      <div className="signUp-parent">
        <form
          onSubmit={handleSubmit}
          className="col-sm-5 col-md-5 col-lg-5 d-flex flex-column signUp-col"
        >
          <h1 className="Add-user d-flex fs-1 justify-content-center mb-3">
            Add user{" "}
          </h1>
          <TextField
            type="text"
            value={name}
            name="username"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            value={email}
            name="email"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            value={password}
            type="password"
            name="password"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className="mt-4 me-4 ms-4"
            id="outlined-select-currency"
            select
            label="District"
            value={district}
            onChange={handleChangeDistrict}
            helperText="Please select your currency"
          >
            {Districs.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className="mt-4 me-4 ms-4"
            id="outlined-select-currency"
            select
            label="Role"
            value={role}
            onChange={handleChangeRole}
            helperText="Please select your Role"
          >
            {Role.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          
          <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  
                  <input
                    style={{ border: "1px solid red" }}
                    type="file"
                    onChange={onChange}
                  />
                  {/* <textarea rows="50" cols="50" value={this.base64code}></textarea> */}
                </div>
              </div>

          <TextField
            type="url"
            name="Image_Url"
            value={image}
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Image_Url"
            variant="outlined"
            onChange={(e) => setImage(e.target.value)}
          />

          <Button
            type="submit"
            className="mt-5 pt-2 pb-2 me-5 ms-5"
            variant="contained"
            style={{ backgroundColor: "#4b00a2", padding: "0" }}
            onClick={() => {
              const values = {
                name: name,
                email: email,
                password: password,
                image: image,
                role: role,
                district: district,
                userDp:image,
                product: [],
              };
              // fetch("http://localhost:5000/create/users", {
              //   method: "POST",
              //   body: JSON.stringify(values),
              //   headers: { "content-type": "application/json" },
              // }).then((data)=>{
              //   setMessage(data)
              //   console.log(message);
              // })
           
            }}
          >
            {" "}
            Sign Up{" "}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
