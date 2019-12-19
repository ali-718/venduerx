import React, { Component } from "react";
import Header from "../Components/Header";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBInput
} from "mdbreact";
import "./Home.css";

export default class Bidders extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div
          style={{
            width: "100%",
            backgroundColor: "#e7ecf4",
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              width: window.innerWidth < 1025 ? "90%" : "80%",
              marginTop: 50
            }}
          >
            <p style={{ fontSize: 22, marginLeft: 20, color: "#555759" }}>
              Summary
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: window.innerWidth > 800 ? "row" : "column",
                alignItems: window.innerWidth > 800 ? "" : "center"
              }}
            >
              <div
                className="search"
                style={{
                  width: "100%",
                  padding: window.innerWidth < 800 ? 10 : 50,
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: window.innerWidth < 1025 ? 5 : 20
                }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <p
                      style={{
                        fontSize: window.innerWidth > 800 ? 20 : 17,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      Duloxetene DR 20mg
                    </p>
                    <p
                      style={{
                        fontSize: window.innerWidth > 800 ? 20 : 17,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      10 Capsules
                    </p>
                    <p
                      style={{
                        fontSize: window.innerWidth > 800 ? 20 : 17,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      Delivery or Pickup
                    </p>
                    <p
                      style={{
                        fontSize: window.innerWidth > 800 ? 20 : 17,
                        color: "gainsboro",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      223W 231st Street
                    </p>
                    <p
                      style={{
                        fontSize: window.innerWidth > 800 ? 20 : 17,
                        color: "gainsboro",
                        margin: 10,
                        fontWeight: "bold",
                        marginTop: -5
                      }}
                    >
                      Bronx NY 10463
                    </p>
                    <p
                      style={{
                        fontSize: window.innerWidth > 800 ? 23 : 20,
                        color: "green",
                        margin: 10
                      }}
                    >
                      $25
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        height: "100%"
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: window.innerWidth > 800 ? 20 : 17,
                            color: "black",
                            margin: 10,
                            fontWeight: "bold"
                          }}
                        >
                          time left
                        </p>
                        <p
                          style={{
                            fontSize: window.innerWidth > 800 ? 15 : 12,
                            color: "gainsboro",
                            margin: 10,
                            fontWeight: "bold",
                            marginTop: -5,
                            textAlign: "right"
                          }}
                        >
                          2 days 5 hours 21 minute
                        </p>
                      </div>

                      <MDBBtn
                        style={{
                          paddingLeft: 15,
                          paddingRight: 15,
                          height:
                            window.innerWidth < 1025 && window.innerWidth > 800
                              ? 80
                              : 50,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 17
                        }}
                        color="primary"
                      >
                        Go Back
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="search"
                style={{
                  width: "100%",
                  padding: window.innerWidth < 800 ? 10 : 50,
                  backgroundColor: "white",
                  borderRadius: 10,
                  margin: window.innerWidth < 1025 ? 5 : 20
                }}
              >
                <div className="row">
                  <div className="col-lg-8">
                    <div style={{ width: "90%", display: "flex" }}>
                      <div
                        style={{
                          width: window.innerWidth < 800 ? "90%" : "80%"
                        }}
                      >
                        <p
                          style={{
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          Total Posts
                        </p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          3
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div
                        style={{
                          width: window.innerWidth < 800 ? "90%" : "80%"
                        }}
                      >
                        <p
                          style={{
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          Deals
                        </p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          1
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div
                        style={{
                          width: window.innerWidth < 800 ? "90%" : "80%"
                        }}
                      >
                        <p
                          style={{
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          This Month Views
                        </p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          1
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div
                        style={{
                          width: window.innerWidth < 800 ? "90%" : "80%"
                        }}
                      >
                        <p
                          style={{
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          Total Spent
                        </p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          $215
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div
                        style={{
                          width: window.innerWidth < 800 ? "90%" : "80%"
                        }}
                      >
                        <p
                          style={{
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          This Month Views
                        </p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "green",
                            fontSize: window.innerWidth < 1025 ? 15 : 20
                          }}
                        >
                          $356
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4"
                    style={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <MDBBtn
                      style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        height:
                          window.innerWidth < 1025 && window.innerWidth > 800
                            ? 80
                            : 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 17
                      }}
                      color="primary"
                    >
                      My Dashboard
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: window.innerWidth < 1025 ? "90%" : "80%",
              marginTop: 50
            }}
          >
            <p style={{ fontSize: 22, marginLeft: 20, color: "#555759" }}>
              Posts
            </p>

            <div
              className="search"
              style={{
                width: "100%",
                padding: window.innerWidth > 1025 ? 50 : 10,
                backgroundColor: "white",
                borderRadius: 10,
                paddingBottom: 0,
                paddingTop: 20,
                marginTop: window.innerWidth < 800 ? 10 : 50
              }}
            >
              <div style={{ width: "100%" }}>
                <div className="row">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: window.innerWidth > 800 ? "" : "center"
                    }}
                    className="col-lg-3"
                  >
                    <p
                      style={{
                        fontSize: window.innerWidth > 800 ? 20 : 17,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      Duloxetene DR 20mg
                    </p>
                    <p
                      style={{
                        fontSize: window.innerWidth > 800 ? 20 : 17,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      180 capsules
                    </p>
                    <p
                      style={{
                        fontSize: window.innerWidth > 800 ? 20 : 17,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      $145 Delivery or Pickup
                    </p>

                    <div
                      style={{ marginTop: 20, display: "flex", width: "100%" }}
                    >
                      <div
                        style={{
                          width: "50%",
                          padding: 10,
                          display: "flex",
                          alignItems: window.innerWidth > 800 ? "" : "center",
                          flexDirection: "column"
                        }}
                      >
                        <p style={{ fontSize: 15 }}>Edit Post</p>
                      </div>
                      <div
                        style={{
                          width: "50%",
                          padding: 10,
                          display: "flex",
                          alignItems: window.innerWidth > 800 ? "" : "center",
                          flexDirection: "column"
                        }}
                      >
                        <p style={{ fontSize: 15 }}>Remove Post</p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height:
                        window.innerWidth > 760 && window.innerWidth < 1050
                          ? 120
                          : 200,
                      justifyContent:
                        window.innerWidth < 1025 && window.innerWidth > 800
                          ? "flex-end"
                          : "center",
                      alignItems: "center",
                      flexDirection: window.innerWidth > 760 ? "row" : "column",
                      marginTop: window.innerWidth > 760 ? 0 : 100,
                      paddingRight:
                        window.innerWidth < 1025 && window.innerWidth > 800
                          ? 50
                          : 0
                    }}
                    className="col-lg-7"
                  >
                    <div
                      style={{
                        padding: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <div
                        style={{
                          padding: window.innerWidth > 800 ? 30 : 20,
                          paddingTop: 0,
                          borderRightWidth: window.innerWidth > 800 ? 1 : 0,
                          borderRightStyle:
                            window.innerWidth > 800 ? "solid" : "none",
                          borderRightColor:
                            window.innerWidth > 800 ? "gray" : ""
                        }}
                      >
                        <p
                          style={{
                            color: "#C7C7C7",
                            margin: 0,
                            marginTop:
                              window.innerWidth > 760 &&
                              window.innerWidth < 1050
                                ? 10
                                : -10
                          }}
                        >
                          Views
                        </p>
                      </div>
                      <p style={{ margin: 0, marginTop: -20, fontSize: 25 }}>
                        32
                      </p>
                    </div>

                    <div
                      style={{
                        padding: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: window.innerWidth > 800 ? 0 : 30
                      }}
                    >
                      <div
                        style={{
                          padding: window.innerWidth > 800 ? 30 : 20,
                          paddingTop: 0,
                          borderRightWidth: window.innerWidth > 800 ? 1 : 0,
                          borderRightStyle:
                            window.innerWidth > 800 ? "solid" : "none",
                          borderRightColor:
                            window.innerWidth > 800 ? "gray" : ""
                        }}
                      >
                        <p
                          style={{
                            color: "#C7C7C7",
                            margin: 0,
                            marginTop: -10
                          }}
                        >
                          Total Bids
                        </p>
                      </div>
                      <p style={{ margin: 0, marginTop: -20, fontSize: 25 }}>
                        12
                      </p>
                    </div>

                    <div
                      style={{
                        padding: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: window.innerWidth > 800 ? 0 : 30
                      }}
                    >
                      <div
                        style={{
                          padding: window.innerWidth > 800 ? 30 : 20,
                          paddingTop: 0,
                          borderRightWidth: window.innerWidth > 800 ? 1 : 0,
                          borderRightStyle:
                            window.innerWidth > 800 ? "solid" : "none",
                          borderRightColor:
                            window.innerWidth > 800 ? "gray" : ""
                        }}
                      >
                        <p
                          style={{
                            color: "#C7C7C7",
                            margin: 0,
                            marginTop: -10
                          }}
                        >
                          Best Bid
                        </p>
                      </div>
                      <p style={{ margin: 0, marginTop: -20, fontSize: 25 }}>
                        $132
                      </p>
                    </div>

                    <div
                      style={{
                        padding: 10,
                        paddingTop: 0,
                        paddingBottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: window.innerWidth > 800 ? 0 : 30
                      }}
                    >
                      <div
                        style={{
                          padding: window.innerWidth > 800 ? 30 : 20,
                          paddingTop: 0,
                          borderRightWidth: window.innerWidth > 1025 ? 1 : 0,
                          borderRightStyle:
                            window.innerWidth > 800 ? "solid" : "none",
                          borderRightColor:
                            window.innerWidth > 800 ? "gray" : ""
                        }}
                      >
                        <p
                          style={{
                            color: "#C7C7C7",
                            margin: 0,
                            marginTop: -10
                          }}
                        >
                          Time Left
                        </p>
                      </div>
                      <p style={{ margin: 0, marginTop: -20, fontSize: 25 }}>
                        26h 30m
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-2"
                    style={{
                      height:
                        window.innerWidth > 760 && window.innerWidth < 1050
                          ? 70
                          : 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        window.innerWidth < 1025 && window.innerWidth > 800
                          ? "flex-end"
                          : "center",
                      marginTop: window.innerWidth > 760 ? 0 : 30,
                      paddingRight:
                        window.innerWidth < 1025 && window.innerWidth > 800
                          ? 20
                          : 0
                    }}
                  >
                    <MDBBtn
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        height:
                          window.innerWidth < 1025 && window.innerWidth > 800
                            ? 80
                            : 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 17
                      }}
                      color="primary"
                    >
                      Show Bidders
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
