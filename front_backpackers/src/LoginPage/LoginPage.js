import React, { Component } from "react";
import axios from "axios";
import LoginFormContainer from "./LoginForm";
import { toast } from "react-toastify";
import Position from "../Toast/Toastify";

import "react-toastify/dist/ReactToastify.css";

class LoginPage extends Component {
  submit = logs => {
    const log = logs;
    axios
      .post("/auth/login", { mail: log.mail, password: log.password })
      .then(response => {
        if (response.status === 200) {
          toast.success("Tu es en ligne !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
        localStorage.setItem("BackpackersToken", response.data.token);
        this.props.history.push("/");
      })
      .catch(errors => {
        if (errors.response.status === 400) {
          toast.error("Mauvais mot de passe ou adresse mail !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      });
  };
  render() {
    return (
      <div>
        <LoginFormContainer onSubmit={this.submit} />
        <Position />
      </div>
    );
  }
}

export default LoginPage;
