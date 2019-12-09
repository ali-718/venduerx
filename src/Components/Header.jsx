import React, { Component } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBInput
} from "mdbreact";
import "../screens/Home.css";
import Map from "../assets/png/maproads.jpg";
import Money from "../assets/png/Icons-05.png";
import Search from "../assets/png/Icons-01.png";
import Mail from "../assets/png/Icons-02.png";
import Logo from "../assets/png/logo.png";

export default class Header extends Component {
  render() {
    return (
      <nav
        style={{ backgroundColor: "white" }}
        class="navbar navbar-expand-lg navbar-light"
      >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">
            <img src={Logo} style={{ width: 180, height: 70 }} />
          </a>
          <ul
            style={{ marginLeft: 50 }}
            class="navbar-nav mr-auto mt-2 mt-lg-0"
          >
            <li class="nav-item active">
              <a style={{ fontSize: 18 }} class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a style={{ fontSize: 18 }} class="nav-link" href="#">
                My Listings
              </a>
            </li>
            <li class="nav-item active">
              <a style={{ fontSize: 18 }} class="nav-link" href="#">
                Help Center
              </a>
            </li>
          </ul>

          <MDBBtn
            style={{ marginRight: 10, display: "flex", height: 50 }}
            color="primary"
          >
            <MDBIcon
              icon="clipboard"
              style={{ marginRight: 10, fontSize: 30 }}
            />
            <p style={{ fontSize: 15, marginTop: 5 }}>Create New Post</p>
          </MDBBtn>
          {window.innerWidth < 400 ? <br /> : null}
          <MDBBtn style={{ margin: 0 }}>
            <div
              style={{
                fontSize: 10,
                marginLeft: 20,
                borderRadius: 100,
                width: 15,
                height: 15,
                backgroundColor: "green"
              }}
            >
              <p style={{ color: "white" }}>2</p>
            </div>
            <MDBIcon
              icon="bell"
              style={{
                marginRight: 10,
                color: "gray",
                fontSize: 35,
                marginTop: -50
              }}
            />
          </MDBBtn>
          {window.innerWidth < 400 ? <br /> : null}
          <MDBBtn style={{ margin: 0 }}>
            <div
              style={{
                fontSize: 10,
                marginLeft: 30,
                borderRadius: 100,
                width: 15,
                height: 15,
                backgroundColor: "green"
              }}
            >
              <p style={{ color: "white" }}>19</p>
            </div>
            <MDBIcon
              icon="envelope"
              style={{
                marginRight: 10,
                color: "gray",
                fontSize: 35,
                marginTop: -50
              }}
            />
          </MDBBtn>
          {window.innerWidth < 400 ? <br /> : null}
          <MDBBtn style={{ margin: 0, display: "flex" }}>
            <img
              src="https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_960_720.jpg"
              style={{ width: 50, height: 50, borderRadius: 100 }}
            />

            <p style={{ marginLeft: 10, marginTop: 10, fontSize: 15 }}>
              John Brown
            </p>
          </MDBBtn>
        </div>
      </nav>
    );
  }
}
