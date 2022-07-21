import React,{useState} from "react";
import add_to_cart from "../images/add_to_cart.png"
import onlineShopping from "../images/onlineShopping.png"
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const SignUp = () => {

//? This is for District Dropdown
const Districs = [
    {
      value: 'Ariyalur',
      label: 'Ariyalur',
    },
    {
      value: 'Chengalpattu',
      label: 'Chengalpattu',
    },
    {
      value: 'Chennai',
      label: 'Chennai',
    },
    {
      value: 'Coimbatore',
      label: 'Coimbatore',
    },
    {
      value: 'Cuddalore',
      label: 'Cuddalore',
    },
    {
      value: 'Dharmapuri',
      label: 'Dharmapuri',
    },
    {
      value: 'Dindigul',
      label: 'Dindigul',
    },
    {
      value: 'Erode',
      label: 'Erode',
    },
    {
      value: 'Kallakurichi',
      label: 'Kallakurichi',
    },
    {
      value: 'Kanchipuram',
      label: 'Kanchipuram',
    },
    {
      value: 'Kanyakumari',
      label: 'Kanyakumari',
    },
    {
      value: 'Karur',
      label: 'Karur',
    },
    {
      value: 'Krishnagiri',
      label: 'Krishnagiri',
    },
    {
      value: 'Madurai',
      label: 'Madurai',
    },
    {
      value: 'Nagapattinam',
      label: 'Nagapattinam',
    },

    {
      value: 'Namakkal',
      label: 'Namakkal',
    },    {
      value: 'Nilgiris',
      label: 'Nilgiris',
    },    {
      value: 'Perambalur',
      label: 'Perambalur',
    },    {
      value: 'Pudukkottai',
      label: 'Pudukkottai',
    },    {
      value: 'Ramanathapuram',
      label: 'Ramanathapuram',
    },    {
      value: 'Ranipet',
      label: 'Ranipet',
    },    {
      value: 'Salem',
      label: 'Salem',
    },    {
      value: 'Sivaganga',
      label: 'Sivaganga',
    },    {
      value: 'Tenkasi',
      label: 'Tenkasi',
    },    {
      value: 'Thanjavur',
      label: 'Thanjavur',
    },    {
      value: 'Theni',
      label: 'Theni',
    },    {
      value: 'Thoothukudi',
      label: 'Thoothukudi',
    },    {
      value: 'Tiruchirappalli',
      label: 'Tiruchirappalli',
    },    {
      value: 'Tirunelveli',
      label: 'Tirunelveli',
    },    {
      value: 'Tirupathur',
      label: 'Tirupathur',
    },    {
      value: 'Tiruppur',
      label: 'Tiruppur',
    },    {
      value: 'Tiruvallur',
      label: 'Tiruvallur',
    },    {
      value: 'Tiruvannamalai',
      label: 'Tiruvannamalai',
    },{
      value: 'Tiruvarur',
      label: 'Tiruvarur',
    },
    {
      value: 'Vellore',
      label: 'Vellore',
    },
    {
      value: 'Viluppuram',
      label: 'Viluppuram',
    },
    {
      value: 'Viluppuram',
      label: 'Viluppuram',
    },
    {
      value: 'Virudhunagar',
      label: 'Virudhunagar',
    },
  ];
//? This is for District Dropdown
  const Role = [
    {
      value:'Admin',
      label:'Admin'
    },
    {
      value:'Vendors',
      label:'Vendors'
    }
  ];

  const [District, setDistrict] = useState('Chennai');

  const [role,setRole]= useState("")

  const handleChange = (event) => {
    setDistrict(event.target.value);
    setRole(event.target.value)
  };
console.log({District:District,role:role});
  return (
    <div className="container-fluid signUp-parent mt-5 justify-content-center">
             <div className="row mt-5 h-70 justify-content-center signUp-child1">
              <div className="col-sm-6 h-100 col-md-6 col-lg-6 col1">
                    {/* <img className="img" src="http://unblast.com/wp-content/uploads/2020/04/Online-Shopping-Illustration.jpg" width="500px" /> */}
              </div>

              <div className="col-sm-4 h-100 col-md-4 col-lg-4 d-flex flex-column col2">
               <TextField type="text" name="username" className="mt-4" id="outlined-basic" label="Name" variant="outlined"/>
               <TextField type="email" name="email" className="mt-4" id="outlined-basic" label="E-mail" variant="outlined"/>
               <TextField type="password" name="password"  className="mt-4" id="outlined-basic" label="Password" variant="outlined"/>
               <TextField className="mt-4"
          id="outlined-select-currency"
          select
          label="District"
          value={District}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {Districs.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField className="mt-4"
          id="outlined-select-currency"
          select
          label="Role"
          value={role}
          onChange={handleChange}
          helperText="Please select your Role"
        >
          {Role.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>        
<TextField type="file" />
               </div>

             </div>
    </div>
  );
};

export default SignUp;
