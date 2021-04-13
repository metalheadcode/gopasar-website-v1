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
              title={"Seamlessly Connect"}
              description={
                "We help to bridge between supply and demand via our customer base."
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
              title={"Automate Process"}
              description={
                "We help to handle engage and manage your customers."
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
              title={"Effectively Market"}
              description={
                "We help to market all agri-products with our professional team."
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
