import React from "react"
import { Col, Row } from "reactstrap"
import Feature from "../Feature/FeaturesTypeEighth"
import {
  Basket,
  Bookmark,
  Email,
  Extension,
  Group,
  Home,
} from "../../../../components/Icons/Icons"
import Oval from "../../../../components/Frame/Frame"
import { Fade } from "react-awesome-reveal"
import classes from "./Features.module.css"

const Features = (props) => {
  return (
    <React.Fragment>
      <Row className={classes.featuresRow}>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={100} triggerOnce={true}>
            <Feature
              title={"Wholesales Trading"}
              description={
                "One stop B2B e-commerce platform for agriproduct trading."
              }
            >
              <Oval variant={"large"}>
                <Bookmark />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={150} triggerOnce={true}>
            <Feature
              title={"Automated Invoice"}
              description={
                "Billing your customers automatically via email or digital receipt."
              }
            >
              <Oval variant={"large"}>
                <Home />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={200} triggerOnce={true}>
            <Feature
              title={"Pre-Booking"}
              description={
                "Manage and book the agriproducts from farm at the lowest price guarantee."
              }
            >
              <Oval variant={"large"}>
                <Basket />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={250} triggerOnce={true}>
            <Feature
              title={"Customer Management"}
              description={
                "Manage your customer’s contact, purchase billing and more in one platform."
              }
            >
              <Oval variant={"large"}>
                <Extension />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={300} triggerOnce={true}>
            <Feature
              title={"Trend Analysis"}
              description={
                "Providing our selected VIPs with the market trend analysis."
              }
            >
              <Oval variant={"large"}>
                <Group />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={400} triggerOnce={true}>
            <Feature
              title={"Trackable Purchase"}
              description={
                "Every process from farm to logistic are trackable. "
              }
            >
              <Oval variant={"large"}>
                <Email />
              </Oval>
            </Feature>
          </Fade>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Features
