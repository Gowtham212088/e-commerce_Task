import { color } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { Api } from "../data/API";

const ResetPassword = () => {
  const history = useHistory();

  const { _id, token } = useParams();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/signIn");
    const passwordData = {
      password: password,
      newPassword: newPassword,
    };

    var axios = require("axios");
    var data = JSON.stringify(passwordData);

    var config = {
      method: "post",
      url: `${Api}/new-password/${_id}/${token}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (res) {
        setResponse(JSON.stringify(res.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="reset-login mt-2  py-5">
        {/* Here we implementing a conditional rendering   */}

        <div className="container mt-5 ">
          <div className="row reset-row justify-content-center">
            <div className="col-lg-5  reset-box">
              <h2 className="pt-2 pb-1 text-center text-danger">
                Enter new password
              </h2>
              <form className="formdata" onSubmit={handleSubmit}>
                <div className="form-row  py-3 pt-5"></div>
                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <input
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      className="reset-inp px-3"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>

                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <input
                      onChange={(event) => setNewPassword(event.target.value)}
                      type="password"
                      className="reset-inp px-3"
                      placeholder="Re-Enter Password"
                    />
                  </div>
                </div>

                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <button type="submit" className="reset-btn1 pb-2 ">
                      {" "}
                      Reset Password{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
