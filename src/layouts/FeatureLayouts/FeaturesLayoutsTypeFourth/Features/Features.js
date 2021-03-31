import React from "react"
import { Col, Row } from "reactstrap"
import Feature from "../Feature/FeatureTypeFourth"
import { Assigment, Bookmark, Email } from "../../../../components/Icons/Icons"
import Oval from "../../../../components/Frame/Frame"
import { Fade } from "react-awesome-reveal"
import classes from "./features.module.css"

const Features = (props) => {
  return (
    <React.Fragment>
      <Row className={classes.featuresRow}>
        <Col lg="4" md="6" className={classes.feature}>
          <Fade top delay={150} triggerOnce={true}>
            <Feature
              title={"We Have Access To Smart Farming"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam."
              }
            >
              <Oval variant={"normal"}>
                <Bookmark />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" className={classes.feature}>
          <Fade top delay={200} triggerOnce={true}>
            <Feature
              title={"Feature 2"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam."
              }
            >
              <Oval variant={"normal"}>
                <Email />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" className={classes.feature}>
          <Fade top delay={250} triggerOnce={true}>
            <Feature
              title={"Feature 3"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam."
              }
            >
              <Oval variant={"normal"}>
                <Assigment />
              </Oval>
            </Feature>
          </Fade>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Features
