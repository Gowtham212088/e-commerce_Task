import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useHistory } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { products } from "../data/Users";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartRedux";
import StripeCheckout from "react-stripe-checkout";
import { Api } from "../data/API";
import axios from "axios";
import { Badge, Button } from "@mui/material";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import site_logo from "../images/site_logo.png";
import ReorderIcon from '@mui/icons-material/Reorder';

const KEY =
  "pk_test_51LWeIHSGFNS9bnCsc4y5WUqUEmYZazRmLNr4ExLvh7vFwumwVGNPR4D9da1yY0PXnSXYrBXrUmTvwT3H7KWa3gra00yZBQ1KKj";

const Cart = () => {
  const history = useHistory();

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const product = cart.products;
  const quantity = cart.quantity;
  const total = cart.total;
console.log(product);

  // remove from cart
  const handleRemove = (index) => {
    dispatch(removeProduct({index, price: product[index].price, quantity, total  }));
  };

  async function handleToken(token, addresses) {
    const response = await axios.post(`${Api}/checkout`, { token, product });
    await axios.post(`${Api}/create/orderInfo`, { token, product, total });
    if (response === 200) {
      // navigate("/success");
      console.log("200");
    } else {
      console.log("error");
    }
  }

  return (
    <div className="container-fluid cart-contain ">
      <nav className="navbar navbar-expand-lg bg-transparent nav-border fw-bold">
      <div className="container-fluid ">
        <a
          onClick={() => history.push("/")}
          className="navbar-brand fs-3 font-clr"
        >
          <img src={site_logo} alt="nav-img" className="mb-2" width="30px" />{" "}
          Better Buys
        </a>

        <button
        style={{backgroundColor:"#EEE3FF",border:"2px solid #4B00A2"}}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "> <ReorderIcon style={{color:"#4b00a2"}}/> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
        </div>
      </div>
    </nav>
      {product.length === 0 ? <div className="d-flex justify-content-center"> <img src="https://hakimitr.com/assets/website/images/empty-cart.gif"/></div> : product.map((product, index) => (
        <CartTemplate
          {...product}
          key={index}
          delbtn={
            <button
              onClick={()=>handleRemove(index)}
              className="btn btn-outline-white border-0 text-danger"
            >
              delete
            </button>
          }
        />
      ))}

      {/* cart total */}
      <div className="col h-100 shadow-lg mt-2 rounded-3 text-center MainContent_Text m-2">
        <div className="p-3">
          <h4 className="fw-bold">Order summary</h4>
          <h6>
            Total Price:{" "}
            <span className="fw-bold text-success">₹ {Math.round(total)}</span>
          </h6>
          <StripeCheckout
            name="Better Buys"
            billingAddress
            shippingAddress
            description={`Your amount is ₹ ${Math.round(total)}`}
            amount={Math.round(total) * 100}
            token={handleToken}
            currency="INR"
            stripeKey={KEY}
          >
            <Button variant="outlined">
             <CreditScoreIcon style={{marginRight:"7px"}}/>  Pay Now
            </Button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

function CartTemplate({ poster, _id, name,summary , quantity, price, delbtn }) {
  return (
   <div>
   <div className="row">
<div className="col-md-6"> <img id="img-cart" width="350px" className="img-fluid" src={poster} alt={name} /> </div>

<div className="col-md-6 py-5 " id="nps">

 <h1 className="px-5 text-start"> {name} </h1>
 <h2> {`₹ ${price}`} </h2>
 <h4> {summary} </h4>
 <h4 style={{color:"green"}}> Order Id : {_id} </h4>
 <h3 > {quantity}Nos </h3>
 <span> {delbtn} </span> 
</div>

</div>
   </div>
  );
}

export default Cart;
