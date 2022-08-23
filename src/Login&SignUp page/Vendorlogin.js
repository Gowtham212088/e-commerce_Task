import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Button, Snackbar } from "@mui/material";
import vendor from "../images/vendor.png";
import admin_side from "../images/onlineShopping.png";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Api } from "../data/API";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {toast} from "react-hot-toast"

const Vendorlogin = () => {
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const [password, setPassword] = useState("");
//   const [resp, setResp] = useState("");
  const [emailOtp, setEmailOtp] = useState({});
  const [emailResp, setEmailResp] = useState("");
//   const [open, setOpen] = React.useState(false);

// console.log(resp.message);
//   window.localStorage.setItem("token", resp.token);

//   //! Modal Handlers

  const handleModalClick = (event) => {
    event.preventDefault();

    var axios = require("axios");
    var data = JSON.stringify({
      email: emailOtp,
    });

    var config = {
      method: "post",
      url: `${Api}/conform/mailVerification`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setEmailResp(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

//   //! Login Handlers.
//   const handleClick = (event) => {
//     event.preventDefault();
//     const signinData = {
//       email: email,
//       password: password,
//     };
//     var axios = require("axios");
//     var data = JSON.stringify(signinData);

//     var config = {
//       method: "post",
//       url: `${Api}/seller/signIn`,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
//         setResp(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//     if (resp.message == "Login Sucessful") {
//       setOpen(true);
//       history.push("/vendor-dashboard");
//      }
     

//   };

//   //! Modal Handlers

// const handleModalClick = (event) => {
//   event.preventDefault();

//   var axios = require("axios");
//   var data = JSON.stringify({
//     email: emailOtp,
//   });

//   var config = {
//     method: "post",
//     url: `${Api}/conform/mailVerification`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };

//   axios(config)
//     .then(function (response) {
//       setEmailResp(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Cannot be blank"),
  password: Yup.string().required("Cannot be blank"),
});

  const history = useHistory();

  return (
    <div className="signIn ">
      
      <section className="Form mx-4 my-4 ">
        <div className="container">
          <div className="row signIn-row no-gutters">
            <div className="col-lg-5">
              <IconButton
                style={{
                  color: "#4B00A2",
                  border: "1px solid #4b00a2",
                  position: "relative",
                  top: "15px",
                }}
                onClick={() => history.push("/home")}
              >
                {" "}
                <ArrowBackIcon
                  style={{ color: "#4B00A2", font: "25px" }}
                />{" "}
              </IconButton>

              <img src={admin_side} className="img-fluid signIn-image" alt="" />
            </div>
            <div className="col-lg-7 input-column px-5 pt-1">
              <div>
                <h1 className="vendorLogIn-font"> Vendor Login </h1>
                <h4 className="SignIn-font"> Sign in into your account </h4>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={async(values) => {
                    // same shape as initial values // Api calls
                  
                    try {
                      const response = await axios.post(`${Api}/seller/signIn`,values)
                      window.localStorage.setItem("token", response.data.token);
                      history.push("/vendor-dashboard");
                      toast.success("Login Successful");
                    } catch (error) {
                      toast.error(error);
                      console.log(error);
                    }
                 
                  
                    // console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                <Form >
                  <div className="form-row">
                    <div className="col-lg-7">
                      <Field
                      name="email"
                       type="email"
                        placeholder="Email-Address"
                        className="form-control my-3 p-3"
                      />
                      {errors.email && touched.email ? (
            <div style={{color:"red",fontSize:"15px"}}> <b>{errors.email}</b></div>
          ) : null}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-lg-7">
                      <Field
                      name="password"
                         type="password"
                        placeholder="password"
                        className="form-control my-3 p-3"
                      />
                      {errors.password && touched.password ? (
            <div style={{color:"red",fontSize:"15px"}}> <b> {errors.password} </b> </div>
          ) : null}
                    </div>
                  </div>

<div className="d-flex justify-content-justify-content-around gap-5">
                  <a
                    className="my-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap"
                    href="#"
                  >
                    {" "}
                    Forgot Password{" "}
                  </a>
                  <Link
                  to="/sellerSignup"
                    className="my-2"
                  
                    href="#"
                  >
                    {" "}
                    Don't have a account? Sign Up{" "}
                  </Link>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title ms-auto"
                            id="exampleModalLabel"
                          >
                            You will recive link on your mail
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form >
                            <div className="mb-3">
                              <label
                                for="recipient-name"
                                className="col-form-label"
                              >
                                Enter Email:
                              </label>
                              <input
                                onChange={(e) => setEmailOtp(e.target.value)}
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                            <div className="modal-footer">
                          <button
                           type="button"
                           onClick={handleModalClick}
                           className="btn btn-primary"
                           data-bs-dismiss="modal"
                           >
                            Send OTP
                          </button>
                        </div>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-lg-7">
                      <button
                        type="submit"
                        className="signIn-butt mt-1 mb-3"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </Form>
                  )}
                  </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vendorlogin;
