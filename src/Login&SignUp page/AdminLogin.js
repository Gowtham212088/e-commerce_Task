import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import admin_side from "../images/admin_side.png";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Api } from "../data/API";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {toast} from "react-hot-toast"

const AdminLogin = () => {
  const history = useHistory();

  //   //! State Management.

  //   const [email, setEmail] = useState("");
  //   const [role, setRole] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [resp, setResp] = useState("");
    const [emailOtp, setEmailOtp] = useState({});
    const [emailResp, setEmailResp] = useState("");

  //   window.localStorage.setItem("token", resp.token);

  //   console.log(resp.token);

  //   //! This is for Role Dropdown.

  //   //   const Role = [
  //   //   {
  //   //     value: "Admin",
  //   //     label: "Admin",
  //   //   },
  //   //   {
  //   //     value: "Vendor",
  //   //     label: "Vendor",
  //   //   },
  //   // ];

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
  //       url: `${Api}/admin/signIn`,
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

  //     if (resp.status == "Successful") {
  //       history.push("/admin-dashboard");
  // }
  //   };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Cannot be blank"),
    password: Yup.string().required("Cannot be blank"),
  });

  return (
    <div className="signIn ">
      <section className="Form mx-4 my-4">
        <div className="container mt-5">
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
                <ArrowBackIcon style={{ color: "#4B00A2", font: "25px" }} />
              </IconButton>
              <img src={admin_side} className="img-fluid signIn-image" alt="" />
            </div>
            <div className="col-lg-7 input-column px-5 pt-1">
              <div>
                <h1 className="vendorLogIn-font "> Admin Login </h1>
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
                      const response = await axios.post(`${Api}/admin/signIn`,values)
                      window.localStorage.setItem("token", response.data.token);
                      history.push("/admin-dashboard");
                      toast.success("Login Successfully");
                    } catch (error) {
                      toast.error(error);
                      console.log(error);
                    }
                 
                  
                    // console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="form-row">
                        <div className="col-lg-7">
                          <Field
                            name="email"
                            type="email"
                            placeholder="Email-Address"
                            className="form-control my-3 p-3"
                          />
                          {errors.email && touched.email ? (
                            <div style={{color:"red",fontSize:"15px"}}><b> {errors.email} </b></div>
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
                            <div style={{color:"red",fontSize:"15px"}}><b> {errors.password}</b></div>
                          ) : null}
                        </div>
                      </div>

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

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title ms-auto"
                                id="exampleModalLabel"
                              >
                                You will recive a OTP via mail
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="mb-3">
                                  <label
                                    for="recipient-name"
                                    className="col-form-label"
                                  >
                                    Enter Email:
                                  </label>
                                  <input
                                  onChange={(e)=>setEmailOtp(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                                <div className="modal-footer">
                              <button
                              onClick={handleModalClick}
                                style={{
                                  backgroundColor: "#4b00a2",
                                  border: "#4b00a2",
                                }}
                                type="button"
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
                            className="btn btn-primary signIn-butt mt-2 mb-3"
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

export default AdminLogin;
