import React, { useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditIcon from "@material-ui/icons/Edit";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components@material/Grid/GridItem.js";
import GridContainer from "../../components@material/Grid/GridContainer.js";
// import Table from "../../components@material/Table/Table.js";
// import Tasks from "../../components@material/Tasks/Tasks.js";
// import CustomTabs from "../../components@material/CustomTabs/CustomTabs.js";
// import Danger from "../../components@material/Typography/Danger.js";
import Card from "../../components@material/Card/Card.js";
import CardHeader from "../../components@material/Card/CardHeader.js";
import CardIcon from "../../components@material/Card/CardIcon.js";
import CardBody from "../../components@material/Card/CardBody.js";
import CardFooter from "../../components@material/Card/CardFooter.js";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { bugs, website, server } from "../../variables/general.js";

import {
  dailySalesChart,
  // emailsSubscriptionChart,
  // completedTasksChart,
} from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

function Dashboard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const useStyles = makeStyles(styles);

  const type = (x) => {
    switch (x) {
      case 3:
        return <h1>scientifique</h1>;
      default:
        return "";
    }
  };

  console.log(props);
  return (
    <div style={{ backgroundColor: "white" }}>
      {props.event.EventsAdherent.map((el) => (
        <ProductWrapper>
          <div
            className="card container"
            style={{
              backgroundColor: "#f3f3f3",
              marginLeft: "15px",
              marginTop: "20px",
              height: "350px",
              borderRadius: "10px",
            }}
          >
            <div>
              <div className="row">
                <h3
                  style={{
                    marginLeft: "35px",
                    fontFamily: "permanent Marker, cursive",
                    textTransform: "uppercase",
                    color: "#f82249",
                    marginTop: "10px",
                  }}
                >
                  {el.Titre}
                </h3>
                <h4
                  style={{
                    color: "white",
                    backgroundColor: "#f82249",
                    width: "90px",
                    height: "40px",
                    marginLeft: "200px",
                    paddingLeft: "15px",
                    paddingTop: "5px",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                >
                  Type
                </h4>
                <div className="cart-icon">
                  <i
                    className="fas fa-trash"
                    style={{
                      cursor: "pointer",
                      marginTop: "25px",
                      marginLeft: "340px",

                      fontSize: " 1.2rem",
                      color: "#ffa400 ",
                    }}
                    variant="primary"
                  ></i>
                  <EditIcon
                    onClick={handleShow}
                    style={{
                      marginLeft: "5px",
                      marginBottom: "5px",
                      fontSize: " 1.2rem",
                      color: "#ffa400 ",
                    }}
                  ></EditIcon>
                </div>
              </div>
              <div className="row">
                <h5 style={{ color: "grey", marginLeft: "50px" }}>
                  {el.Start_date} /
                </h5>
                <h5 style={{ color: "grey", marginLeft: "5px" }}>
                  {el.End_date}
                </h5>
              </div>
              <div className="row">
                <h5 style={{ color: "grey", marginLeft: "50px" }}>
                  {el.Country}-
                </h5>
                <h5 style={{ color: "grey" }}>{el.City}</h5>
              </div>

              <div className="row">
                <div className=" col-6">
                  <p
                    className="text-capitalize font-weight-bold "
                    style={{ marginLeft: "55px", marginTop: "10px" }}
                  >
                    Description :
                  </p>
                  <p
                    className="text-muted lead"
                    style={{ marginLeft: "55px", fontSize: "14px" }}
                  >
                    {el.Description}
                  </p>
                </div>
                <div className="col-6">
                  <img
                    className="img-fluid "
                    alt="map"
                    src={`http://localhost:5000/${el.EventImage[0]}`}
                    style={{
                      height: "210px",
                      width: "420px",
                      borderRadius: "10px",
                      marginLeft: "50px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ProductWrapper>
      ))}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgb(233, 233, 233);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0rem 0.4rem;

    background: var(--lightBleu);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 1s linear;
  }
  .cart-btn:hover {
    color: var(--mainBleu);
    cursor: pointer;
  }
`;
const mapStateToProps = (state) => {
  return {
    event: state.Reducer1,
    model: state.modelReducertwo,
  };
};
export default connect(mapStateToProps)(Dashboard);
