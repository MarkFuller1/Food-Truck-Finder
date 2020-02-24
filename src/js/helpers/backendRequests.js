import axios from "axios";

const backend_url = "http://localhost:8080/v/";

const request_headers =
  "Access-Control-Allow-Origin: " *
  ",content-type: application/json, Accept: application/json";

export function getAllUsers() {
  axios({
    method: "GET",
    url: backend_url + "users/all",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
      Accept: "application/json"
    }
  })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function logInUser(u) {
  axios
    .get(backend_url + "login/", {
      data: {
        'email': u.email,
        'password': u.password
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
        Accept: "application/json"
      }
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });

  // const request = {
  //   method: "GET",
  //   url: backend_url + "login",
  //   data: u,
  //   headers: { 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json', 'Accept': 'application/json' }
  // };

  // console.log(request);

  // axios(request)
  //   .then(function(response) {
  //     console.log(response.data);
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
}

export function postNewUser(u) {
  const request = {
    method: "POST",
    url: backend_url + "users/add/",
    data: u,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
      Accept: "application/json"
    }
  };

  console.log(request);

  axios(request)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}