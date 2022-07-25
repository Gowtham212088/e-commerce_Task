import React from "react";
import site_logo from "../images/site_logo.png";
import { Button } from "@mui/material";
import discount_offer from "../images/discount_offer.svg";

const Carousel = () => {
  return (
    <div className="container-fluid">
      <div
        className="row carousel-row text-center"
        style={{ borderBottom: "1px solid #4b00a2" }}
      >
        <h1 className="slogan mt-5">
          <h1 className="mt-5">
            <img src={site_logo} width="55px" /> Better Buys{" "}
          </h1>
          Save money. Live better. <br />
          <button
            type="button"
            style={{ backgroundColor: "#4b00a2", border: "#4b00a2" }}
            class="btn btn-primary btn-lg mt-3"
          >
            Shop now
          </button>
        </h1>
      </div>
    </div>
  );
};

export default Carousel;
