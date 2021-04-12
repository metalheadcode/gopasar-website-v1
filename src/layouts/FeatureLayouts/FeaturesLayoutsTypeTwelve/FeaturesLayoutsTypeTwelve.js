import React from "react"
import { Col, Container, Row } from "reactstrap"

import VerticalModal from "./VerticalModal/VerticalModal"
import Feature from "./Feature/FeatureTypeFourth"
import Oval from "../../../components/Frame/Frame"

import FeatureCard from "./FeatureCard/FeaturesTypeTwelve"
import { Fade } from "react-awesome-reveal"
import classes from "./FeaturesLayoutsTypeTwelve.module.css"

function FeaturesLayoutsTypeTwelve(props) {
  const [modalShow, setModalShow] = React.useState(false)

  const right = "justify-content-end"
  const left = "justify-content-start"
  return (
    <React.Fragment>
      <section
        id={props.id}
        className={`section ${classes.features} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
      >
        {props.bgVideo === true ? (
          <video
            title="bussiness-farmer"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            autoPlay
            loop
            muted
          >
            <source src={props.bgImage}></source>
          </video>
        ) : (
          <img
            src={props.bgImage}
            alt="modern-farmer"
            style={{ position: "absolute", height: "100%", objectFit: "cover" }}
          />
        )}

        <Container
          fluid={true}
          className={`container-fluid ${classes.containerFluid}`}
        >
          <div className={classes.gridWrapper}>
            <Container>
              <Row className={props.cardSide === "right" ? right : left}>
                <Col lg="6" md="7">
                  <Fade triggerOnce={true}>
                    <FeatureCard
                      title={props.title}
                      description={props.description}
                      dark={props.dark ? true : false}
                    >
                      {props.features.map((feature) => (
                        <Feature
                          id={feature.id}
                          title={feature.subTitle}
                          description={feature.subDescription}
                          dark={props.dark ? true : false}
                        >
                          <Oval color={"#FDCA40"} variant={"large"}>
                            <span>{feature.icon}</span>
                          </Oval>
                        </Feature>
                      ))}
                    </FeatureCard>
                  </Fade>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <VerticalModal
          dark={props.dark ? true : false}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </React.Fragment>
  )
}
export default FeaturesLayoutsTypeTwelve
