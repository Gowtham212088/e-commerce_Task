import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useHistory } from 'react-router-dom';
import shopkeeper from '../images/shopkeeper.png'
import { Api } from '../data/API';
import axios from 'axios';
import { MenuItem } from '@mui/material';

function Copyright(props) {
  return (
    <Typography style={{backgroundColor:"#4b00a2"}} variant="body2" color="text.secondary" align="center" {...props}>
     
    
      
    
    </Typography>
  );
}

const theme = createTheme();

export default function SellerSignUp() {

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
  const [district, setdistrict] = React.useState("");

  const [role, setRole] = useState("");

  const [firstName, setFirstName] = useState("");

  const [secondName, setSecondName] = useState("");

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
    const signUpData = {
      firstName:firstName,
      secondName:secondName,
      email:email,
      password:password,
      image:image,
      role:"",
      district:district
    };
    console.log(signUpData);
    axios.post(`${Api}/create/users`,signUpData ,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res.data)
    }).then(()=>history.push('/vendor-login'))
    .catch((error) => {
      console.error(error)
  })
    setdistrict("")
    setRole("")
    setFirstName("")
    setSecondName("")
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

 

  return (
    <div style={{backgroundColor:"#EEE3FF",height:"100vh",marginTop:"0px",display:"flex",alignItems:"center",border:"5px solid #EEE3FF"}} >
        <Container style={{border:"5px solid #EEE3FF"}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={shopkeeper} width="120px" />
          <h2 style={{color:"#3900A2"}} component="h1" variant="h5">
           Get your seller account
          </h2>
          <form onSubmit={handleSubmit}  component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={firstName}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={secondName}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>setSecondName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>

              <Grid style={{display:'flex',justifyContent:"start"}} item xs={12}>
              <TextField
            className="col-12"
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
                  onChange={(e)=>setImage(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
            style={{backgroundColor:"#3900A2"}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/vendor-login" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </div>
  );
}
