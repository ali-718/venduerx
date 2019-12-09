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

export default class Listings extends Component {
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
          <div style={{ width: "80%", marginTop: 50 }}>
            <p style={{ fontSize: 22, marginLeft: 20, color: "#555759" }}>
              Summary
            </p>
            <div style={{ width: "100%", display: "flex" }}></div>
            <div
              className="search"
              style={{
                width: "100%",
                padding: 50,
                backgroundColor: "white",
                borderRadius: 10
              }}
            >
              <div
                style={{
                  width: "100%"
                }}
              >
                <div className="row">
                  <div
                    className="col-md-4"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <div style={{ width: "90%", display: "flex" }}>
                      <div style={{ width: "80%" }}>
                        <p>Total Posts</p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: 18
                          }}
                        >
                          3
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div style={{ width: "80%" }}>
                        <p>Details</p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: 18
                          }}
                        >
                          3
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div style={{ width: "80%" }}>
                        <p>Posts Cancelled</p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: 18
                          }}
                        >
                          3
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div style={{ width: "80%" }}>
                        <p>Total Offers</p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: 18
                          }}
                        >
                          3
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div style={{ width: "80%" }}>
                        <p>Attracted Pharmacies</p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: 18
                          }}
                        >
                          3
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-4"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <div style={{ width: "90%", display: "flex" }}>
                      <div style={{ width: "80%" }}>
                        <p>This Moth Views</p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: 18
                          }}
                        >
                          21
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div style={{ width: "80%" }}>
                        <p>Total Spent</p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: 18
                          }}
                        >
                          $432
                        </p>
                      </div>
                    </div>

                    <div style={{ width: "90%", display: "flex" }}>
                      <div style={{ width: "80%" }}>
                        <p>Saved Roughly</p>
                      </div>
                      <div style={{ width: "10%" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "#017BFF",
                            fontSize: 18
                          }}
                        >
                          $576
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-4"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "flex-end"
                    }}
                  >
                    <MDBBtn
                      style={{
                        paddingLeft: 30,
                        paddingRight: 30,
                        height: 50,
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

          <div style={{ width: "80%", marginTop: 50 }}>
            <p style={{ fontSize: 22, marginLeft: 20, color: "#555759" }}>
              Posts
            </p>
            <div
              className="search"
              style={{
                width: "100%",
                padding: 50,
                backgroundColor: "white",
                borderRadius: 10,
                paddingBottom: 0,
                paddingTop: 20
              }}
            >
              <div style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-3">
                    <p
                      style={{
                        fontSize: 20,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      Duloxetene DR 20mg
                    </p>
                    <p
                      style={{
                        fontSize: 20,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      180 capsules
                    </p>
                    <p
                      style={{
                        fontSize: 20,
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
                      <div style={{ width: "50%", padding: 10 }}>
                        <p style={{ fontSize: 15 }}>Edit Post</p>
                      </div>
                      <div style={{ width: "50%", padding: 10 }}>
                        <p style={{ fontSize: 15 }}>Remove Post</p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: 200,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    className="col-md-7"
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
                          padding: 30,
                          paddingTop: 0,
                          borderRightWidth: 1,
                          borderRightStyle: "solid",
                          borderRightColor: "gray"
                        }}
                      >
                        <p
                          style={{
                            color: "#C7C7C7",
                            margin: 0,
                            marginTop: -10
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
                        justifyContent: "center"
                      }}
                    >
                      <div
                        style={{
                          padding: 30,
                          paddingTop: 0,
                          borderRightWidth: 1,
                          borderRightStyle: "solid",
                          borderRightColor: "gray"
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
                        justifyContent: "center"
                      }}
                    >
                      <div
                        style={{
                          padding: 30,
                          paddingTop: 0,
                          borderRightWidth: 1,
                          borderRightStyle: "solid",
                          borderRightColor: "gray"
                        }}
                      >
                        <p
                          style={{
                            color: "#C7C7C7",
                            margin: 0,
                            marginTop: -10
                          }}
                        >
                          Best bid
                        </p>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          marginTop: -20,
                          fontSize: 25,
                          color: "#38B653"
                        }}
                      >
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
                        justifyContent: "center"
                      }}
                    >
                      <div
                        style={{
                          padding: 30,
                          paddingTop: 0,
                          borderRightWidth: 1,
                          borderRightStyle: "solid",
                          borderRightColor: "gray"
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
                    className="col-md-2"
                    style={{
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <MDBBtn
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        height: 50,
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

            <div
              className="search"
              style={{
                width: "100%",
                padding: 50,
                backgroundColor: "white",
                borderRadius: 10,
                paddingBottom: 0,
                paddingTop: 20,
                marginTop: 50
              }}
            >
              <div style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-md-3">
                    <p
                      style={{
                        fontSize: 20,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      Duloxetene DR 20mg
                    </p>
                    <p
                      style={{
                        fontSize: 20,
                        color: "black",
                        margin: 10,
                        fontWeight: "bold"
                      }}
                    >
                      180 capsules
                    </p>
                    <p
                      style={{
                        fontSize: 20,
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
                      <div style={{ width: "50%", padding: 10 }}>
                        <p style={{ fontSize: 15 }}>Edit Post</p>
                      </div>
                      <div style={{ width: "50%", padding: 10 }}>
                        <p style={{ fontSize: 15 }}>Remove Post</p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: 200,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    className="col-md-7"
                  >
                    <div className="row">
                      <div className="col-md-3">
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
                              padding: 30,
                              paddingTop: 0,
                              borderRightWidth: 1,
                              borderRightStyle: "solid",
                              borderRightColor: "gray"
                            }}
                          >
                            <p
                              style={{
                                color: "#C7C7C7",
                                margin: 0,
                                marginTop: -10
                              }}
                            >
                              Views
                            </p>
                          </div>
                          <p
                            style={{ margin: 0, marginTop: -20, fontSize: 25 }}
                          >
                            32
                          </p>
                        </div>
                      </div>

                      <div className="col-md-3">
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
                              padding: 30,
                              paddingTop: 0,
                              borderRightWidth: 1,
                              borderRightStyle: "solid",
                              borderRightColor: "gray"
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
                          <p
                            style={{ margin: 0, marginTop: -20, fontSize: 25 }}
                          >
                            12
                          </p>
                        </div>
                      </div>

                      <div className="col-md-3">
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
                              padding: 30,
                              paddingTop: 0,
                              borderRightWidth: 1,
                              borderRightStyle: "solid",
                              borderRightColor: "gray"
                            }}
                          >
                            <p
                              style={{
                                color: "#C7C7C7",
                                margin: 0,
                                marginTop: -10
                              }}
                            >
                              Best bid
                            </p>
                          </div>
                          <p
                            style={{
                              margin: 0,
                              marginTop: -20,
                              fontSize: 25,
                              color: "#38B653"
                            }}
                          >
                            $132
                          </p>
                        </div>
                      </div>

                      <div className="col-md-3">
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
                              padding: 30,
                              paddingTop: 0,
                              borderRightWidth: 1,
                              borderRightStyle: "solid",
                              borderRightColor: "gray"
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
                          <p
                            style={{ margin: 0, marginTop: -20, fontSize: 25 }}
                          >
                            26h 30m
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-2"
                      style={{
                        height: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <MDBBtn
                        style={{
                          paddingLeft: 15,
                          paddingRight: 15,
                          height: 50,
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
        </div>
      </React.Fragment>
    );
  }
}
