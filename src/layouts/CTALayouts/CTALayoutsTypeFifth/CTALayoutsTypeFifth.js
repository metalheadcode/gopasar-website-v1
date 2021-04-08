import React from "react"
import classes from "./CTALayoutsTypeFifth.module.css"

import Content from "./Content/CTATypeFirst"
import { Container, Col, Row } from "reactstrap"
import { AppLogo } from "../../../components/Icons/Icons"

function CTALayoutsTypeFifth(props) {
  return (
    <React.Fragment>
      <section
        id={props.id}
        className={`section  ${classes.cta} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
      >
        <div className={classes.gridWrapper}>
          <Container>
            <Row>
              <Col lg={8} md={8} className="mx-auto text-center">
                <Content
                  title={"GoPasar Serving From Farm To Shelfs"}
                  description={
                    "We provide a digital Solution to Connect between farm to business. Wish to explore more as."
                  }
                >
                  <a href="/" style={{ display: "block" }}>
                    <AppLogo />
                  </a>
                </Content>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}
export default CTALayoutsTypeFifth
