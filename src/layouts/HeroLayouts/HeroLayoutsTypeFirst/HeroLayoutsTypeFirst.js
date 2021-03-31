import React from "react"
import { Container, Col, Row } from "reactstrap"
import VerticalModal from "./VerticalModal/VerticalModal"
import RightImage from "../../../img/young-woman-controlling-plantation-min.jpg"
import Divider from "../../../components/Divider/Divider"
import Logos from "./Logos/Logos"
import classes from "./HeroLayoutsTypeFirst.module.css"
import { Fade } from "react-awesome-reveal"

const titleText = "Join Our Great Team!"
const descriptionText =
  "Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!"

const HeroLayoutsTypeFirst = (props) => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <section
        style={{ backgroundColor: "#FDCA40" }}
        className={`${classes.hero} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
      >
        <Container
          fluid="true"
          className={`position-relative ${classes.positionRelative}`}
        >
          <div className={classes.gridWrapper}>
            <Container>
              <Row>
                <Col lg="7" md="7" className={classes.leftColumn}>
                  <Row>
                    <Col>
                      <Fade top triggerOnce={true}>
                        <h1>{titleText}</h1>
                      </Fade>
                      <Fade top delay={50} triggerOnce={true}>
                        <p className={`normal-text ${classes.description}`}>
                          {descriptionText}
                        </p>
                      </Fade>
                    </Col>

                    <Col className={`col-12 ${classes.bottomLevel}`}>
                      <Fade top delay={200} triggerOnce={true}>
                        <Divider />
                      </Fade>
                    </Col>

                    <Col>
                      <Fade top delay={250} triggerOnce={true}>
                        <Logos dark={props.dark ? true : false} />
                      </Fade>
                    </Col>
                  </Row>
                </Col>
                <Col
                  lg={{ size: 4, offset: 1 }}
                  md={{ size: 4, offset: 1 }}
                  className={classes.rightColumn}
                >
                  <div
                    className={`position-relative ${classes.positionRelative}`}
                  >
                    <div
                      className={`position-absolute ${classes.positionAbsolute}`}
                    >
                      <img
                        src={RightImage}
                        alt="farmer"
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          transform: "rotateY(180deg)",
                        }}
                      />
                    </div>
                  </div>
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
    </>
  )
}
export default HeroLayoutsTypeFirst
