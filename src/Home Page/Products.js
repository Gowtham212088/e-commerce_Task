import React,{useState} from "react";
import { products } from "../data/Users";
import { Api } from "../data/API";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useHistory } from "react-router-dom";


const ProductList = () => {


const [data,setData] = useState([]);
console.log(data);
React.useEffect(() => {
  axios.get(`${Api}/products/customers`).then((response) => {
    setData(response.data);
  });
}, []);

  
  return (
    <div className="container mt-3">
      <div className="row gap-3 justify-content-between ">
        {data.map((product,key) => (
          <ProductBox
            id={key}
            name={product.name}
            category={product.productType}
            poster={product.poster}
            summary={product.summary}
            price={`₹ ${product.price}`}
          />
        ))}
      </div>
    </div>
  );
};

export function ProductBox({ name, category, poster, summary, price,id}) {

  const history = useHistory();


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
          <h5 className="card-title"> {price}
       </h5>
          
          {/* <p className="card-text">
           {summary}
          </p> */}
          <div className="d-flex justify-content-center gap-1">
            {/* <a href="#" style={{backgroundColor:"#4b00a2",border:"#4b00a2"}} className="btn btn-primary">
              {" "}
              Buy now
            </a> */}
            <a href="#" onClick={()=>history.push(`/products/${id}`)}  style={{backgroundColor:"#4b00a2",border:"#4b00a2"}}  className="btn btn-primary">
              {" "}
              <ShoppingBagOutlinedIcon /> Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
