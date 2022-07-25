import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { products } from "../data/Users";

const Cart = () => {
  const history = useHistory();

  const allData = products.filter((elem) => {
    return elem.roll == "vendor";
  });
  const items = allData.map((elem) => {
    return elem.product;
  });
  const roundOffData = items.flat();
  const filtItems = roundOffData.filter((elem) => elem.Approvel === true);

  return (
    <div className="container-fluid cart-container">
      <div class="row  cart-card">
        <div className="col-1">
          <IconButton
            onClick={() => history.push("/home")}
            style={{
              width: "55px",
              border: "2px solid #4b00a2",
              height: "55px",
              position: "relative",
              top: "25px",
            }}
            aria-label="delete"
            size="large"
          >
            <ArrowBackIcon style={{ width: "25px", color: "#4b00a2" }} />
          </IconButton>
        </div>

        <div
          className="col-11 text-center align-items-center"
          style={{ position: "relative", top: "50px" }}
        >
          {" "}
          <h1 className="cartItems-font">
            Carted Items{" "}
            <AddShoppingCartIcon
              style={{ fontSize: "39px", fontWeight: "bolder" }}
            />
          </h1>
        </div>
      </div>

      <div className="row gap-2 justify-content-between ">
        {filtItems.map((product) => (
          <CartList
            name={product.Name}
            category={product.productType}
            poster={product.poster}
            summary={product.summary}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

const CartList = ({ name, category, poster, summary, price }) => {
  return (
    <div className="col-lg-3 mt-3 h-50 m-0 p-0 cart-card1">
      <div class="card mx-auto">
        <img
          src={poster}
          style={{ objectFit: "cover" }}
          class="card-img-top"
          height="280px"
          alt={name}
        />
        <div class="card-body">
          <h5 class="card-title"> {name} </h5>{" "}
          <h5 class="card-title"> {price} </h5>
          <p class="card-text"> {summary} </p>
          <div className="d-flex justify-content-center gap-1">
            <a href="#" class="btn btn-primary">
              {" "}
              <AddShoppingCartIcon /> Proceed to checkout{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
