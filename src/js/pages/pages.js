import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./../components/Dashboard";
<<<<<<< HEAD

// import LoginTest from './LoginPage'

=======
import SignUp from "../components/SignUp";
>>>>>>> 519272161b93246980e5247d381926083f41cf5f
import { TwoFieldForm } from "../components/TwoFieldForm";
import Profile from "./Profile";
import LoginPage from "./LoginPage";
import axios from "axios";
import SimpleMap from "./GoogleTest";
import LoginPage from "../components/LoginPage";
import * as Request from "../helpers/backendRequests";
import ListOfUsers from "./../components/ListOfUsers";
import FoodTruckTable from "./../components/FoodTruckTable";

export class TestRouting extends React.Component {
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
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/FoodTruckTable">FoodTruckTable</Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link to="/Profile">User Profile</Link>
=======
            <Link to="/create_account">Create Account</Link>
>>>>>>> 519272161b93246980e5247d381926083f41cf5f
          </li>
        </ul>
      </div>
    );
  }
}

export class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ""
    };

    this.sendFormDataPostNewUser = this.sendFormDataPostNewUser.bind(this);
  }

  sendFormDataPostNewUser = async function(e) {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      name:
        e.target.elements.firstName.value + ' ' + e.target.elements.lastName.value,
      username: e.target.elements.username.value,
      type: e.target.elements.type.value
    };

    console.log(user);

    var status = await Request.postNewUser(user);

    console.log("The status is");
    console.log(status.message)

    this.setState({ status: status.message });
  };

  render() {
    console.log("redering the page as " + this.state.status);
    return (
      <div>
        <SignUp
          status={this.state.status}
          action={this.sendFormDataPostNewUser}
        />
      </div>
    );
  }
}

export class DatabaseListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trucks: []
    };

    this.sendFormDataPostNewUser = this.sendFormDataPostNewTruck.bind(this);
  }

  async componentDidMount() {
    console.log("Mounted");
    var users = await Request.getAllTrucks();

    this.setState({ trucks: users });
  }

  sendFormDataPostNewTruck = function(e) {
    e.preventDefault();
    const truck = {
      name: e.target.elements.name.value,
      schedule: e.target.elements.schedule.value
    };

    //this.setState({users: this.state.users.push()});

    console.log(truck);

    return Request.postNewTruck(truck);
  };

  render() {
    return (
      <div>
        <Link to="/loginpage/">Back</Link>
        <TwoFieldForm
          action={this.sendFormDataPostNewTruck}
          fieldOne={"Food Truck Name"}
          fieldTwo={"Food Truck hours:"}
          buttonLabel={"Submit"}
        />
        <h3>List Of Owned Food Trucks</h3>
        <ListOfUsers trucks={this.state.trucks} />
      </div>
    );
  }
}


const sendFormDataUpdateUser = function(e) {
  e.preventDefault();

  const user = {
    FirstName: e.target.elements.FirstName.value,
    LastName: e.target.elements.LastName.value,
    email: e.target.elements.email.value,
    username: e.target.elements.username.value,
    password: e.target.elements.password.value
  };
  
  console.log(user);

  var requestData = Request.UpdateUser(user);

  console.log(requestData);
}

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: ""
    };

  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <LoginPage
          redirect={this.state.redirect}
        />
      </div>
    );
  }
}

export class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: ""
    };
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <FoodTruckTable />
      </div>
    );
  }
}

<<<<<<< HEAD
export class UserProfile extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      redirect: "",
    };

    this.sendFormDataUpdateUser = sendFormDataUpdateUser.bind(this);
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <Profile action={sendFormDataUpdateUser} redirect={this.state.redirect}/>
      </div>
    );
  }
}


=======
>>>>>>> 519272161b93246980e5247d381926083f41cf5f
export class Home extends React.Component {
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}
