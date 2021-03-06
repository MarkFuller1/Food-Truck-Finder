import axios from "axios";
var constants = require("./../helpers/constants");

const request_headers = {
  "Access-Control-Allow-Origin": "*",
  "content-type": "application/json",
  Accept: "application/json",
};

export function getAllUsers() {
  return axios({
    method: "GET",
    url: constants.backend_url + "users/",
    headers: request_headers,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function markMessageRead(i) {
  const request = {
    method: "POST",
    url: constants.backend_url + "message/markMessageAsRead",
    params: { id: i },
    headers: request_headers,
  };
  console.log(request);

  return axios(request)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function deleteMessage(i) {
  const request = {
    method: "POST",
    url: constants.backend_url + "message/deleteMessage",
    params: { id: i },
    headers: request_headers,
  };
  console.log(request);

  return axios(request)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getReviewsByUser(i) {
  return await axios({
    method: "GET",
    url: constants.backend_url + "review/getReviewsByUser",
    params: { uid: i },
    headers: request_headers,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getUserByID(i) {
  return await axios({
    method: "GET",
    url: constants.backend_url + "users/getUserByID",
    params: { id: i },
    headers: request_headers,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function postNewUser(u, fail, success) {
  const request = {
    method: "POST",
    url: constants.backend_url + "api/auth/signup",
    data: u,
    headers: request_headers,
  };

  console.log(request);

  return await axios(request)
    .then(function (response) {
      success(response.data)
      return true;
    })
    .catch(function (error) {
      fail(error)
      return false;
    });
}



export async function getAllTrucks() {
  return await axios({
    method: "GET",
    url: constants.backend_url + "trucks/",
    headers: request_headers,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function getTrucksForToday() {
  return axios({
    method: "GET",
    url: constants.backend_url + "schedule/getTrucksForToday",
    headers: request_headers,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

export async function getUserSettings(id) {
  return await axios({
    method: "GET",
    url: constants.backend_url + "users/getUserByID",
    params: { id: id },
  })
    .then(function (res) {
      console.log(res.data);
      return res.data;
    })
    .catch(function (e) {
      console.log(e);
      return e;
    });
}

export async function getPreferredTrucks(id, lon, lat) {
  console.log("making request for preferred trucks");
  console.log(id + " " + lon + " " + lat);
  return axios({
    method: "GET",
    url: constants.backend_url + "upref/getPreferred",
    params: {
      id: id,
      lon: lon,
      lat: lat,
    },
    headers: request_headers,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function sendNotification(data) {
  return await axios({
    method: "POST",
    url: constants.backend_url + "message/sendToAllByTruckId",
    data: data,
    headers: request_headers,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function findTrucksByOwnerID(id) {
  return await axios({
    method: "GET",
    url: constants.backend_url + "trucks/findTrucksByOwnerID",
    params: { id: id },
    headers: request_headers,
  })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

export function getScheduleDTOByID(id) {
  return axios({
    method: "GET",
    url: constants.backend_url + "schedule/getScheduleDTOByID",
    params: { id: id },
    headers: request_headers,
  })
    .then(response => {
      console.log(response.data);
      return response.data;
    }) 
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

export async function getUPById(id) {
  return await axios({
    method: "GET",
    url: constants.backend_url + "upref/getUPreferencesByID/" + id,
    headers: request_headers,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

export async function getSubscriptionsByUserID(uid) {
  return  await axios({
    method: "GET",
    url: constants.backend_url + "subscription/getSubscriptionsByUserID",
    params: {uid},
    headers: request_headers
  }).then(function (response) {
    console.log(response.data);
    return response.data;
  }).catch(function(error) {
    console.log(error);
    return error;
  });
}

export async function addSubscription(uid, truckId) {
  return await axios({
    method: "POST",
    url: constants.backend_url + "subscription/add",
    params: {uid, truckId},
    headers: request_headers
  }).then(function(response) {
    console.log(response.data);
    return response.data;
  }).catch(function(error) {
    console.log(error);
  });
}

export async function unsubscribe(subscriptionid) {
  return await axios({
    method: "DELETE",
    url: constants.backend_url + "subscription/unsubscribe",
    params: {subscriptionid},
    headers: request_headers
  }).then(function(response) {
    console.log(response.data);
    return response.data;
  }).catch(function(error) {
    console.log(error);
  });
}

export async function findReviewsByTruckID(truckID) {
  return await axios({
    method: "GET",
    url: constants.backend_url + "review/getReviewsByTruckId",
    params: {truckID},
    headers: request_headers
  }).then(function (response) {
    console.log(response.data);
    return response.data;
  }).catch(function(error) {
    console.log(error);
    return error;
  });
}

export async function getAllReviews() {
  return await axios({
    method: "GET",
    url: constants.backend_url + "review/getReviewsWithName",
    headers: request_headers
  }).then(function(response){
    console.log(response.data);
    return response.data;
  }).catch(function(error) {
    console.log(error);
  });
}

export async function addReview(userID,rating,description,truckid,truckname) {
  return await axios({
    method: "POST",
    url: constants.backend_url + "review/add",
    params: {userID,rating,description,truckid,truckname},
    headers: request_headers
  }).then(function(response) {
    console.log(response.data);
    return response.data;
  }).catch(function(error) {
    console.log(error);
  });
}

export async function updateTruckByID(data){
  const request = {
    method: "PUT",
    url: constants.backend_url + "trucks/updateByTruck",
    data: data,
    headers: request_headers,
  };
  // console.log("PUT: Update truck by ID");
  // console.log(request);

  return await axios(request)
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}


export async function updateSchedule(data){
  const request = {
    method: "PUT",
    url: constants.backend_url + "schedule/update",
    data: data,
    headers: request_headers,
  };
  console.log("PUT: Update Schedule by ID");
  console.log(request);

  return await axios(request)
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function deleteTruck(dt) {
  const request = {
    method: "DELETE",
    url: constants.backend_url + "trucks/removeTruck",
    params: { id: dt },
    headers: request_headers,
  };
  console.log(request);

  return axios(request)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// currently doesn't work
export async function deleteSchedule(dt){
  const request = {
    method: "DELETE",
    url: constants.backend_url + "schedule/removeByTruck",
    params: { id: dt },
    headers: request_headers,
  };
  console.log(request);

  return axios(request)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}


export async function postNewTruck(t) {
  const request = {
    method: "POST",
    url: constants.backend_url + "trucks/add",
    data: t,
    headers: request_headers,
  };
  console.log("POST: new truck");
  console.log(request);

  return await axios(request)
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}


export async function postNewSchedule(s) {
  const request = {
    method: "POST",
    url: constants.backend_url + "schedule/add",
    data: s,
    headers: request_headers,
  };
  console.log("POST: new schedule");
  console.log(request);

  return await axios(request)
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function updateMenu(f, dt) {
  const request = {
    url: constants.backend_url + "menu/add",
    method: "POST",
    params: { 
      file: f,
      id: dt 
    },
    config: { headers: {'Content-Type': 'multipart/form-data' }}
  };
  console.log("POST: update menu");
  console.log(request);

  return await axios(request)
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}


export async function getMenuByTruckId(id) {
  return await axios({
    method: "GET",
    url: constants.backend_url + "menu/" + id,
    headers: request_headers
  }).then(function(response){
    console.log(response.data);
    return response.data;
  }).catch(function(error) {
    console.log(error);
  });
}