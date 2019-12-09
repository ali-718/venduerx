import React, { Component } from "react";
import Logo from "../assets/png/logo.png";
import { Effect } from "react-notification-badge";
import NotificationBadge from "react-notification-badge";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBInput
} from "mdbreact";
// import Map from "../assets/png/Location-01.png";
import "./Home.css";
import Map from "../assets/png/maproads.jpg";
import Money from "../assets/png/Icons-05.png";
import Search from "../assets/png/Icons-01.png";
import Mail from "../assets/png/Icons-02.png";
import Header from "../Components/Header";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={{ width: "100%", height: 500, display: "flex" }}>
          <div
            style={{
              width: "50%",
              height: 500,
              backgroundColor: "#DD277C",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ width: "60%" }}>
              <p style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
                Your Prescription.
              </p>
              <p style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
                Your Terms.
              </p>
              <p style={{ color: "white", fontWeight: 300, letterSpacing: 2 }}>
                Name your price and let pharmacies bid to earn your business on
                our transparent blockchain platform
              </p>
            </div>
          </div>
          <div
            style={{
              width: "50%",
              height: 500,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img src={Map} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -100
          }}
        >
          <div
            className="search"
            style={{
              width: "90%",
              height: 200,
              backgroundColor: "white",
              borderRadius: 10,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div style={{ width: "90%", height: 200 }}>
              <div className="row">
                <div
                  style={{
                    width: "100%",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className="col-md-3"
                >
                  <div className="form-group">
                    <label
                      style={{ fontSize: 20 }}
                      htmlFor="formGroupExampleInput"
                    >
                      Enter drug name:
                    </label>
                    <input
                      style={{ width: 270, fontSize: 15, height: 50 }}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Atrovastin 20mg tablet"
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className="col-md-3"
                >
                  <div className="form-group">
                    <label
                      style={{ fontSize: 20 }}
                      htmlFor="formGroupExampleInput"
                    >
                      Enter quantity:
                    </label>
                    <input
                      style={{ width: 270, fontSize: 15, height: 50 }}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="30"
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className="col-md-3"
                >
                  <div className="form-group">
                    <label
                      style={{ fontSize: 20 }}
                      htmlFor="formGroupExampleInput"
                    >
                      Enter price:
                    </label>
                    <input
                      style={{ width: 270, fontSize: 15, height: 50 }}
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="$300"
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className="col-md-3"
                >
                  <MDBBtn
                    style={{
                      marginRight: 10,
                      display: "flex",
                      height: 60,
                      width: "90%",
                      marginTop: 20,
                      backgroundColor: "#DD277C",
                      borderRadius: 10
                    }}
                  >
                    <MDBIcon
                      icon="clipboard"
                      style={{ marginRight: 10, fontSize: 40, color: "white" }}
                    />
                    <p style={{ fontSize: 20, color: "white", marginTop: 5 }}>
                      Send to bidders
                    </p>
                  </MDBBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100
          }}
        >
          <div style={{ width: "90%" }}>
            <div className="row">
              <div
                className="col-md-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img src={Money} style={{ width: 300, height: 200 }} />
                <p
                  style={{
                    marginTop: 20,
                    textAlign: "center",
                    fontSize: 18,
                    padding: 10
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here',
                </p>
              </div>
              <div
                className="col-md-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img src={Search} style={{ width: 300, height: 200 }} />
                <p
                  style={{
                    marginTop: 20,
                    textAlign: "center",
                    fontSize: 18,
                    padding: 10
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here',
                </p>
              </div>
              <div
                className="col-md-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img src={Mail} style={{ width: 300, height: 200 }} />
                <p
                  style={{
                    marginTop: 20,
                    textAlign: "center",
                    fontSize: 18,
                    padding: 10
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here',
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
