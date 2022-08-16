import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { products } from "../data/Users";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartRedux";
import StripeCheckout from "react-stripe-checkout";
import { Api } from "../data/API";
import axios from "axios";
const KEY =
  "pk_test_51LWeIHSGFNS9bnCsc4y5WUqUEmYZazRmLNr4ExLvh7vFwumwVGNPR4D9da1yY0PXnSXYrBXrUmTvwT3H7KWa3gra00yZBQ1KKj";

const Cart = () => {
  const history = useHistory();

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const product = cart.products;
  const quantity = cart.quantity;
  const total = cart.total;

  // remove from cart
  const handleRemove = () => {
    dispatch(removeProduct({ product, price: product.price, quantity, total }));
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
    <div className="container-fluid cart-container">
      {product.map((product, index) => (
        <CartTemplate
          {...product}
          key={index}
          delbtn={
            <button
              onClick={handleRemove}
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
            <button className="btn btn-outline-danger text-warning fw-bold">
              Checkout Now
            </button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

function CartTemplate({ poster, _id, name, quantity, price, delbtn }) {
  return (
    <div className="col-sm-5 col-md-6 MainContent_Text">
      <div class="card border-0 shadow-lg rounded-3 mx-auto text-center m-2">
        <div className="text-center">
          <img src={poster} class="card-img-top w-50" alt="..." />
        </div>
        <div class="card-body">
          <h6 className="fw-bold text-secondary"> Name: {name}</h6>
          <h6 className="fw-bold text-secondary">Id: {_id}</h6>
          <h6 className="fw-bold text-secondary">Qty: {quantity}Nos</h6>
          <h6 className="fw-bold text-secondary">
            Price: <span className="text-success">₹ {price * quantity}</span>
          </h6>
          <span className="delbtn">{delbtn}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
