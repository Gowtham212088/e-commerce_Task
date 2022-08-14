import React, { useState }  from "react";
import {products} from "../data/Users"
import axios from "axios";
import { useParams } from "react-router-dom";
import { Api } from "../data/API";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

function ProductInfo (){

  const {id} = useParams();

  const [product,setProduct]= useState({});

  const [quantity, setQuantity] = React.useState(1);


  const dispatch = useDispatch(); 

  React.useEffect(() => {
    axios.get(`${Api}/products/customers/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);


  // product qty change function
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const quant = [
    {
      value: 1,
      label: 1,
    },
    {
        value:2,
        label: 2,
      },
      {
        value: 3,
        label: 3,
      },
      {
        value: 4,
        label: 4,
      },
      {
        value: 5,
        label: 5,
      },
      {
        value: 6,
        label: 6,
      },
  ];

console.log(id);

//! Cart Updation
const handleClick = ()=>{
   dispatch(
    addProduct({...product,quantity})
    )    
}

    return(
    <div>

  <div className="parent">
           <img src={product.poster} className="product-image img-fluid" alt={product.name} width="550px"  /><br/>
       </div>



       <div className="row d-flex justify-content-center rows">

            <div className="col-5 d-flex justify-content-end"> <Button onClick={handleClick} style={{height:"75px", width:"250px",backgroundColor:"#4b00a2"}} variant="contained" disableElevation> Add to Cart </Button> </div>
            <div className="col-5 d-flex justify-content-start"> <Button style={{height:"75px", width:"250px",backgroundColor:"#4b00a2"}} variant="contained" disableElevation> Buy now</Button> </div> 

          </div>

           <div className="row d-flex justify-content-center rows">


<TextField
style={{width:"75px"}}
id="outlined-select-currency-native"
select
label="Quantity"
value={quantity}
onChange={handleChange}
SelectProps={{
  native: true,
}}

>
{quant.map((option) => (
  <option key={option.value} value={option.value}>
    {option.label}
  </option>
))}
</TextField>



</div> 

       <div className="row d-flex justify-content-center gap-3 rows">

<div style={{fontWeight:"50px"}} className="col-5 d-flex justify-content-center"> <h1> {product.name} </h1> </div>
<div className="col-5 d-flex justify-content-center"> <h1> {product.price} </h1> </div> 

</div>

<div className="row d-flex justify-content-center rows ">
        <h1 className="text-center"> {product.summary} </h1>
</div>

      </div>
    )
}

export default ProductInfo;