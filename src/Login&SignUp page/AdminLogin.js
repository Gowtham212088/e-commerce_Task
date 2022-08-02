import React from "react";
import { useHistory } from "react-router-dom";
import admin_side from "../images/admin_side.png";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AdminLogin = () => {
  const history = useHistory();

  return (
    <div className="signIn ">
      <section className="Form mx-4 my-4  ">
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
                onClick={() => history.push("/")}
              >
                {" "}
                <ArrowBackIcon style={{ color: "#4B00A2", font: "25px" }} />
              </IconButton>
              <img src={admin_side} className="img-fluid signIn-image" alt="" />
            </div>
            <div className="col-lg-7 input-column px-5 pt-1">
              <div>
                <h1 className="vendorLogIn-font"> Admin Login </h1>
                <h4 className="SignIn-font"> Sign in into your account </h4>
                <form>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <input
                        type="email"
                        placeholder="Email-Address"
                        className="form-control my-3 p-3"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-lg-7">
                      <input
                        type="password"
                        placeholder="password"
                        className="form-control my-3 p-3"
                      />
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
                    <div className="modal-dialog">
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
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary">
                            Send OTP
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-lg-7">
                      <button
                        onClick={() => {
                          history.push("/admin");
                        }}
                        type="button"
                        className="btn btn-primary signIn-butt mt-2 mb-3"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
