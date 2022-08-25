// import React, { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
// import CreateIcon from '@mui/icons-material/Create';
// import { useHistory } from "react-router-dom";
// import EditData from "./EditData";
// import { Api } from "../data/API";

// const VendorTable = () => {
//   var token = localStorage.getItem("token");

//   const history = useHistory();

//   const baseURL = `${Api}/getData`;

//   const [datas, setDatas] = useState("");

//     const [isLoading, setIsLoading] = useState(true);
//   const [resp, setResp] = useState([]);

//   // console.log(datas);

//   useEffect(() => {
//         var axios = require("axios");
    
//         var config = {
//           method: "get",
//           url: `${Api}/seller/myProducts/userId/${userId}`,
//         };
    
//         axios(config)
//           .then(function (response) {
//             setResp(response.data);
//             setIsLoading(false);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//       }, []);

//   return (
//     <div className="container-fluid admin-container">
//       <div className="row border-2 admin-row justify-content-center align-items-end">
//         <div className="col-5 admin-col">
//           <img src={datas.userDp} className="admin-img" alt="dp" />
//         </div>
//       </div>

//       <div className="row mt-5">
//         <div col-4>
//           {" "}
//           <h2 className="mt-5">
//             {" "}
//             {datas.name}{" "}
//             <Button onClick={() => history.push("/editAdmin")}>
//               {" "}
//                <CreateIcon />{" "}
//             </Button>{" "}
//             <h3> Country: {datas.country} </h3>
//           </h2>
//           <br /> <h2 className="text-muted"> {datas.email} </h2> <br />{" "}
//           <h2 className="text-muted"> {datas.contact} </h2>{" "}
//         </div>
//       </div>

//       <div className=" alert alert-primary">
//         <h2> Dummy datas </h2>
//         <div className="row d-flex h-25 justify-content-between flex-wrap flex-row ticket-box">
//           <div className=" col-2   me-1 mx-2 py-5 mb-3    dash-activity">
//             <h3> Front-End : 85 % </h3>
//           </div>

//           <div className=" col-2 me-1 mx-2 py-5 mb-3   dash-activity1">
//             <h3> Back-End : 70 % </h3>
//           </div>

//           <div className="  col-2 me-1 mx-2 py-5 mb-3   dash-activity2">
//             <h3> Tasks : 90 % </h3>
//           </div>

//           <div className=" col-2  me-1 mx-2 py-5 mb-3   dash-activity3">
//             <h3> Elegablity : True </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorTable;




















import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import { products } from "../data/Users";
import Button from "@mui/material/Button";
import App from "../App";
import { Link, useHistory } from "react-router-dom";
import site_logo from "../images/site_logo.png";
import axios from "axios";
import { useEffect } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Api } from "../data/API";
import { ThreeCircles } from  'react-loader-spinner'

const VendorTable = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [resp, setResp] = useState([]);
  console.log(resp);
  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  // const items = products
  //   .find((elem) => {
  //     return elem.name == "Gowtham";
  //   })
  //   .product.filter((fill) => {
  //     return fill.Approvel === false || true;
  //   });

  // authtoken localStorage
//   const authToken = window.localStorage.getItem("token");

  // get Id from authToken
//   function parseJwt(token) {
//     var base64Url = token.split(".")[1];
//     var base64 = decodeURIComponent(
//       atob(base64Url)
//         .split("")
//         .map((c) => {
//           return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//         })
//         .join("")
//     );
//     return JSON.parse(base64);
//   }

//   let a = parseJwt(authToken);
//   let userId = a._id;

  useEffect(() => {
    var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: `${Api}/seller/myProducts/userId`,
  headers: { 
    'x-auth-token': window.localStorage.getItem("token")
  },
  data : data
};

axios(config)
.then(function (response) {
    setIsLoading(false)
    setResp(response.data);
})
.catch(function (error) {
  console.log(error);
});
  }, []);

  // ?  Conditional rendering
  //  const condRendering = items.map((element) => {
  //     return element.Approvel;
  //   });

  //? Conditional styling
  // const [approval, setApproval] = useState(false)

  const [query, setQuery] = useState("");

  return (
    <div>
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          <h1 className="text-danger"> Products History </h1>
         
        </div>
      </div>
      <section>
        <div className=" table-responsive">
          <table className="table text-light" style={{backgroundColor:"#4B00A2"}}>
            <thead className="bg-light text-danger">
              <tr>
                <th scope="col"> Sl.No </th>
                <th scope="col">Name</th>
                <th scope="col">Summary</th>
              </tr>
            </thead>
            <tbody>
              {resp
                .filter((filt) => filt.name.toLowerCase().includes(query))
                .map(({ name, poster, summary, Approvel }, index) => (
                  <tr>
                    <th scope="row">{index + 1} </th>
                   
                    <td>{name} </td>
                    <td>{summary} </td>
                    
                  </tr>
                ))}
            </tbody>
          </table>
          {isLoading && (
        <div className="d-flex justify-content-center text-center mt-5">
          {/* loader */}
          <ThreeCircles
  height="200"
  width="200"
  color="#4B00A2"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
        </div>
      )}
        </div>
      </section>
    </div>
  );
};

export default VendorTable;