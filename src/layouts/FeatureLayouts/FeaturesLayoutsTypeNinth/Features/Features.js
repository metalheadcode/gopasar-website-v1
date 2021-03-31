import React from "react"
import { Col, Row } from "reactstrap"
import Feature from "../Feature/FeatureTypeFourth"
import { Bookmark, Email, Group } from "../../../../components/Icons/Icons"
import Oval from "../../../../components/Frame/Frame"
import { Fade } from "react-awesome-reveal"
import classes from "./Features.module.css"

const Features = (props) => {
  return (
    <React.Fragment>
      <Row xs="1" className={classes.featuresRow}>
        <Col className={classes.item}>
          <Fade down delay={100} triggerOnce={true}>
            <Feature
              title={"No middle man cost"}
              description={
                "Our solutions to decrease cost for buyer, so you profit more."
              }
            >
              <Oval variant={"normal"}>
                <Email />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col className={classes.item}>
          <Fade down delay={150} triggerOnce={true}>
            <Feature
              title={"Fast, easy and reliable"}
              description={
                "Our apps were design for seamless process experience."
              }
            >
              <Oval variant={"normal"} color={"fdca40"}>
                <Group />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col className={classes.item}>
          <Fade down delay={200} triggerOnce={true}>
            <Feature
              title={"Lower Prices as you go big"}
              description={"The more you, the more profit you will get!"}
            >
              <Oval variant={"normal"} color={"fdca40"}>
                <Bookmark />
              </Oval>
            </Feature>
          </Fade>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Features
