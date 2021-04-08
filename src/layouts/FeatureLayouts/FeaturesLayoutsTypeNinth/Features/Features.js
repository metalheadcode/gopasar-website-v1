import React from "react"
import { Col, Row } from "reactstrap"
import Feature from "../Feature/FeatureTypeFourth"
import { Email } from "../../../../components/Icons/Icons"
import Oval from "../../../../components/Frame/Frame"
import { Fade } from "react-awesome-reveal"
import classes from "./Features.module.css"

const Features = (props) => {
  const features = props.features

  return (
    <React.Fragment>
      <Row xs="1" className={classes.featuresRow}>
        {features.map((feature) => (
          <Col key={feature.id} className={classes.item}>
            <Fade down delay={100} triggerOnce={true}>
              <Feature
                title={feature.subTitle}
                description={feature.subDescription}
              >
                <Oval variant={"normal"}>
                  <Email />
                </Oval>
              </Feature>
            </Fade>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  )
}

export default Features
