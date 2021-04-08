import React from "react"
import CoderImage from "../img/underDevelopment.svg"
import { Container, Row } from "reactstrap"

const UnderDevelopement = (props) => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <img src={CoderImage} alt="coder" />
          <h1 style={{ paddingTop: "40px" }}>Under Developement</h1>
          <p>
            We are working hard to make accessable to every devices, we will let
            you know when iOS are available
          </p>
        </Row>
      </Container>
    </>
  )
}

export default UnderDevelopement
