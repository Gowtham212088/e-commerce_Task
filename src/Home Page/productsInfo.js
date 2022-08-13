import React, { useState }  from "react";
import {products} from "../data/Users"
import axios from "axios";
import { useParams } from "react-router-dom";
import { Api } from "../data/API";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function ProductInfo (){

  const {id} = useParams()

  const [data,setData]= useState("")

// const datas = data[id];

console.log(data);
  React.useEffect(() => {
    axios.get(`${Api}/products/customers/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: '1',
      label: '1',
    },
    {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
      {
        value: '4',
        label: '4',
      },
      {
        value: '5',
        label: '5',
      },
      {
        value: '6',
        label: '6',
      },
  ];

console.log(id);
    return(<div>

 

        <div className="parent">
           <img src={data.poster} className="product-image img-fluid" alt={data.name} width="550px"  /><br/>
       </div>



       <div className="row d-flex justify-content-center rows">

            <div className="col-5 d-flex justify-content-end"> <Button style={{height:"75px", width:"250px",backgroundColor:"#4b00a2"}} variant="contained" disableElevation> Add to Cart </Button> </div>
            <div className="col-5 d-flex justify-content-start"> <Button style={{height:"75px", width:"250px",backgroundColor:"#4b00a2"}} variant="contained" disableElevation> Buy now</Button> </div> 

          </div>

          <div className="row d-flex justify-content-center rows">

<TextField
style={{width:"75px"}}
id="outlined-select-currency-native"
select
label="Quantity"
value={currency}
onChange={handleChange}
SelectProps={{
  native: true,
}}

>
{currencies.map((option) => (
  <option key={option.value} value={option.value}>
    {option.label}
  </option>
))}
</TextField>



</div>

       <div className="row d-flex justify-content-center gap-3 rows">

<div style={{fontWeight:"50px"}} className="col-5 d-flex justify-content-center"> <h1> {data.name} </h1> </div>
<div className="col-5 d-flex justify-content-center"> <h1> {data.price} </h1> </div> 

</div>

<div className="row d-flex justify-content-center rows ">
        <h1 className="text-center"> {data.summary} </h1>
</div>

      
  
         

        

       </div>
    )
}

export default ProductInfo;