import React from "react"
import Form from "./SimpleForm/SimpleForm"

import { Container, Col, Row } from "reactstrap"
import classes from "./FormsLayoutsTypeSeventh.module.css"
import { Fade } from "react-awesome-reveal"
const title = " I wish to explore business opportunities."
const description =
  "Interested on our business model.  Looking forward to know more about the potential collaboration, please drop us your Hello. Thanks"
const shortDescription = "Join over 100 farmers"

function FormsLayoutsTypeSeventh(props) {
  return (
    <React.Fragment>
      <section
        id={props.id}
        className={`section ${classes.form} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
      >
        <div className={classes.wrapper}>
          <Container>
            <Row>
              <Col lg={8} md={8} className="mx-auto text-center">
                <Fade down triggerOnce={true}>
                  <h1 className={`title ${classes.title}`}>{title}</h1>
                </Fade>
                <Fade down delay={50} triggerOnce={true}>
                  <p className={`normal-text ${classes.description}`}>
                    {description}
                  </p>
                </Fade>
              </Col>
            </Row>
            <Row className={classes.formsRow}>
              <Col lg={8} md={8} className="mx-auto text-center">
                <Fade down delay={100} triggerOnce={true}>
                  <Form dark={props.dark ? true : false} />
                </Fade>
              </Col>
            </Row>
            <Row className={classes.textRow}>
              <Col lg={8} md={8} className="mx-auto text-center">
                <Fade down delay={150} triggerOnce={true}>
                  <p className="normal-text ">{shortDescription}</p>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}
export default FormsLayoutsTypeSeventh
