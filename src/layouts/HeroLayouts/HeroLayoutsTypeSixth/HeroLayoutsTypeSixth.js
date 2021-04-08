import React from "react"

import { Container, Col, Row } from "reactstrap"
import { ArrowRight } from "../../../components/Icons/Icons"
import Button from "../../../components/Button/Button"

import firstMockup from "../../../img/Mockups/iPhone.png"
import secondMockup from "../../../img/Mockups/iPadPro.png"
import Socials from "./Socials/Socials"
import classes from "./HeroLayoutsTypeSixth.module.css"
import { Fade } from "react-awesome-reveal"

const titleText = "Build By Farmer For Farmer"
const descriptionText =
  "You no longger need a whatsapps or middle man to manage your wholesale. Use GoPasar!"
const baseLinkText = "Get Started"

const HeroLayoutsTypeSixth = (props) => {
  return (
    <>
      <section
        className={`${classes.hero} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
      >
        <div className={classes.gridWrapper}>
          <Container>
            <Row className={classes.contentRow}>
              <Col lg="12" md="12" className="position-relative">
                <Fade right delay={50} triggerOnce={true}>
                  <img
                    style={{ top: "-80px", right: "-800px" }}
                    src={secondMockup}
                    alt=""
                    className={`${classes.secondImage} position-absolute`}
                    width="1286"
                    height="984"
                  />
                  <img
                    src={firstMockup}
                    style={{ top: "80px", right: "230px", zIndex: "999" }}
                    alt=""
                    className={`${classes.firstImage} position-absolute`}
                    width="350"
                    height="697"
                  />
                </Fade>
              </Col>

              <Col lg="5" md="6" className={classes.rightColumn}>
                <Fade top delay={50} triggerOnce={true}>
                  <h1 style={{ textAlign: "left" }}>{titleText}</h1>
                </Fade>
                <Fade top delay={100} triggerOnce={true}>
                  <p className={`normal-text ${classes.description}`}>
                    {descriptionText}
                  </p>
                </Fade>
                <Fade top delay={150} triggerOnce={true}>
                  <div className={classes.buttonElement}>
                    <Button
                      link={true}
                      href={"#"}
                      classes={"primary large right-icon"}
                      value={baseLinkText}
                      rightIcon={<ArrowRight fill="#ffffff" />}
                    />
                  </div>
                </Fade>

                <div className={classes.socials}>
                  <Fade top delay={200} triggerOnce={true}>
                    <Socials />
                  </Fade>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}
export default HeroLayoutsTypeSixth
