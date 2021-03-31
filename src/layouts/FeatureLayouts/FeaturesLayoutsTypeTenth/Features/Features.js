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
              title={"Feature 1"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam."
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
              title={"Feature 2"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam."
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
              title={"Feature 3"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam."
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
              title={"Feature 4"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam."
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
              title={"Feature 5"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam."
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
              title={"Feature 6"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam."
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
