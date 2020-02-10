import React from "react";
import { Link } from "react-router-dom";

// import LoginTest from './LoginPage'

import { TwoFieldForm } from "../components/TwoFieldForm";
import LoginPage from "./LoginPage";
import axios from "axios";
import SimpleMap from "./GoogleTest";
import * as Request from "../helpers/backendRequests";

export class Home extends React.Component {
  render() {
    return (
      <div className="container padded">
        This is not the home page.
        <ul>
          <li>
            <Link to="/Request">Request from DB</Link>
          </li>
          <li>
            <Link to="/loginpage"> Log In </Link>
          </li>
          <li>
            <Link to="/GoogleTest">GoogleTest</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const sendFormData = function(e) {
  const user = {
    email: e.target.elements.email.value,
    password: e.target.elements.password.value
  };

  console.log(user);

  return Request.postNewUser(user);
};

export class DatabaseListing extends React.Component {
  render() {
    return (
      <div>
        <Link to="/loginpage/">Back</Link>
        <TwoFieldForm
          action={sendFormData}
          fieldOne={"email:"}
          fieldTwo={"password:"}
          buttonLabel={"Submit"}
        />
      </div>
    );
  }
}

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  loginUser(e) {
    e.preventDefault();

    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    };

    console.log("the fields contain -> ");
    console.log(user);
    Request.logInUser(user);
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <LoginPage action={this.loginUser} />
      </div>
    );
  }
}

export class GoogleTest extends React.Component {
  render() {
    return (
      <div>
        <SimpleMap />
      </div>
    );
  }
}
