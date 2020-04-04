import React, { Component } from "react";

import GoogleMap from "google-map-react";
import { geolocated } from "react-geolocated";
import MapIcon from "./MapIcon";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import Tooltip from "@material-ui/core/Tooltip";

import { K_CIRCLE_SIZE, K_STICK_SIZE } from "./MapIconStyles";
import shouldPureComponentUpdate from "react-pure-render/function";
import { Typography } from "@material-ui/core";

export class SimpleMap extends Component {
  constructor(props){
    super(props)
    this.state = {

    }

    this.onHover = this.onHover.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onHover(truckdata){
    // console.log(truckdata)
  }

  onClick(truckData){
    console.log(truckData)
  }

  render() {
    console.log(this.props.trucks);
    this.props.trucks.map(x => {
      console.log(x.longitude + " " + x.latitude);
    });
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%", overflowX: "hidden" }}>
        <GoogleMap
          defaultCenter={[
            this.props.coords.latitude,
            this.props.coords.longitude
          ]}
          defaultZoom={1}
        >
          {this.props.trucks.map((x, i) => {
            return (
              <MapIcon onMouseOver={() => {this.onHover(x)}} onClick={() => {this.onClick(x)}} key={i} truckData={x} lat={x.latitude} lng={x.longitude} />
            );
          })}
          <Tooltip title={<React.Fragment><Typography>Me</Typography></React.Fragment>}>

          <BeenhereIcon
            color="secondary"
            lat={this.props.coords.latitude}
            lng={this.props.coords.longitude}
          />
          </Tooltip>
        </GoogleMap>
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(SimpleMap);
