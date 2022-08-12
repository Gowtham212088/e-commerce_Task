import React,{useState} from "react";
import { products } from "../data/Users";
import { Api } from "../data/API";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductList = () => {

const [data,setData] = useState([]);
console.log(data);
React.useEffect(() => {
  axios.get(`${Api}/products/customers`).then((response) => {
    setData(response.data);
  });
}, []);

  // const allData = products.filter((elem) => {
  //   return elem.role == "vendor";
  // });
  // const items = allData.map((elem) => {
  //   return elem.product;
  // });
  // const roundOffData = items.flat();
  // const filtItems = roundOffData.filter((elem) => elem.Approvel === true);

  // console.log(roundOffData);
  return (
    <div className="container mt-3">
      <div className="row gap-3 justify-content-between ">
        {data.map((product) => (
          <ProductBox
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

export function ProductBox({ name, category, poster, summary, price }) {
  return (
    <div className="col-lg-3">
      <div className="card mx-auto">
        <img
          src={poster}
          style={{ objectFit: "cover" }}
          className="card-img-top"
          height="280px"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>{" "}
          <h5 className="card-title"> {price} </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-between gap-1">
            <a href="#" className="btn btn-primary">
              {" "}
              Buy now
            </a>
            <a href="#" className="btn btn-primary">
              {" "}
              <AddShoppingCartIcon /> Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
