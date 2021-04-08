import React from "react"
import classes from "./FeaturesLayoutsTypeFourth.module.css"

import { Container, Col, Row } from "reactstrap"
import Features from "./Features/Features"
import Video from "../../../img/gopasar_loop_mini_2.mp4"

import { Fade } from "react-awesome-reveal"
const title = "But How? How Does It Work ?"
const description = "Why you speend hundred hours"

const FeaturesLayoutsTypeFourth = (props) => {
  return (
    <>
      <section
        id="how"
        className={`section ${classes.features} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
      >
        <div className={classes.gridWrapper}>
          <Container>
            <Row className={classes.titleRow}>
              <Col lg="7" md="7" className={classes.leftColumn}>
                <Fade top triggerOnce={true}>
                  <h1 className={`title ${classes.title}`}>{title}</h1>
                </Fade>
              </Col>
              <Col lg="5" md="5" className={classes.rightColumn}>
                <Fade top delay={50} triggerOnce={true}>
                  <p className={`normal-text ${classes.description}`}>
                    {description}
                  </p>
                </Fade>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col className={classes.centerContainer}>
                <Fade top delay={100} triggerOnce={true}>
                  <video
                    width="100%"
                    title="looping video"
                    style={{ borderRadius: "30px" }}
                    autoplay=""
                    loop
                    muted
                  >
                    <source src={Video}></source>
                  </video>
                </Fade>
              </Col>
            </Row>
          </Container>

          <Container>
            <Features />
          </Container>
        </div>
      </section>
    </>
  )
}
export default FeaturesLayoutsTypeFourth
