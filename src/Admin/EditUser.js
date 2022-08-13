import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import user from "../images/user.png";
import login from "../images/login.png";



const EditUser = ()=>{

const history = useHistory()

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
      value: "Viluppuram",
      label: "Viluppuram",
    },
    {
      value: "Virudhunagar",
      label: "Virudhunagar",
    },
  ];

  //! This is for District Dropdown

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

  //! Change Handlers

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const handleChangeDistrict = (event) => {
    setdistrict(event.target.value);
  };

    return(
    
    <div className="container editUser-container">
      
            <div className="update-parent">
        <form
          onSubmit={handleSubmit}
          className="col-sm-5 col-md-5 col-lg-5 d-flex flex-column update-col"
        >
          <h1 className="Add-user d-flex fs-1 justify-content-center mb-3">
           Edit User
          </h1>
          <TextField
            type="text"
            name="username"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            name="email"
            className="mt-4 me-4 ms-4"
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
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
          <TextField
            type="url"
            name="Image_Url"
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
                product: [],
              };
            //   fetch("https://6228d2bb9fd6174ca8308614.mockapi.io/Ecommerce", {
            //     method: "PUT",
            //     body: JSON.stringify(values),
            //     headers: { "content-type": "application/json" },
            //   })
           
            }}
          >
            {" "}
            Sign Up{" "}
          </Button>
        </form>
      </div>
        </div>
    )
}

export default EditUser;