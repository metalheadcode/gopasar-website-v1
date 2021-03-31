import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { Col } from "reactstrap"
import { EmailIcon, Phone, UserIcon } from "../../../../components/Icons/Icons"
import Button from "../../../../components/Button/Button"
import classes from "./SimpleForm.module.css"
import CustomInput from "../../../../components/CustomInput/CustomInput"
import "antd/dist/antd.css"

const buttonText = "Let's Talk"

const SimpleForm = (props) => {
  const [text, setText] = useState("")

  const onChange = (event) => {
    setText([event.target.value])
  }

  return (
    <React.Fragment>
      <Form
        className={classes.form}
        action="https://echo.htmlacademy.ru"
        method="post"
      >
        <Form.Row className="align-items-center">
          <CustomInput
            classes={`col-lg-6 col-md-12 ${classes.item} ${props.classes}`}
            controlId="FormInputName"
            dark={props.dark === true ? true : null}
            name="name"
            placeholder="Name"
            simple={false}
            leftIcon={true}
            icon={<UserIcon />}
            onChange={onChange}
            value={text}
          />

          <Col lg="6" md="12">
            <Button
              link={true}
              href={
                "https://wa.me/60168532998?text=I%20am%20interested%20to%20investing%20to%20your%20GoPasar%20Company,%20before%20that,%20may%20I%20know%20a%20details?"
              }
              classes={"primary large simple w-100"}
              value={buttonText}
            />
          </Col>
        </Form.Row>
      </Form>
    </React.Fragment>
  )
}

export default SimpleForm
