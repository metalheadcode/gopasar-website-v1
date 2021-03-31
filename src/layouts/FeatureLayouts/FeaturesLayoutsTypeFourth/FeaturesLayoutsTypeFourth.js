import React from "react"
import classes from "./FeaturesLayoutsTypeFourth.module.css"

import { Container, Col, Row } from "reactstrap"
import Features from "./Features/Features"

import { Fade } from "react-awesome-reveal"
const title = "How Does GoPasar Work?"
const description =
  "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!"

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
                  <iframe
                    title="looping video"
                    style={{ borderRadius: "30px" }}
                    src="https://www.youtube.com/embed/sYZ-F-hB3Qo?vq=hd1080&autoplay=1&mute=1&loop=1&fs=0&color=white&controls=0&disablekb=1"
                    frameborder="0"
                  />
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
