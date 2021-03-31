import React, { useState } from "react"
import classes from "./SimpleForm.module.css"
import { Form } from "react-bootstrap"
import { Col } from "reactstrap"
import { UserIcon } from "../../../../components/Icons/Icons"
import Button from "../../../../components/Button/Button"
import CustomInput from "../../../../components/CustomInput/CustomInput"

const SimpleForm = (props) => {
  // state for input
  const [text, setText] = useState("")

  // function for onChange handler
  const onChange = (event) => {
    setText(event.target.value)
  }

  return (
    <React.Fragment>
      <Form className={`${classes.form}`}>
        <Form.Row className="align-items-center">
          <CustomInput
            classes={`col-lg-6 col-md-6 col-sm-6 ${classes.item} ${props.classes}`}
            controlId="userName"
            name="name"
            simple={false}
            leftIcon={true}
            icon={<UserIcon />}
            dark={props.dark === true ? true : null}
            placeholder="Name"
            value={text}
            onChange={onChange}
          />

          <Col lg="6" md="6" sm="6">
            <Button
              link={true}
              href={`https://wa.me/60146884403?text=Hi!%20My%20name%20is%20${text}.%20And%20I%20interested%20to%20talk%20more%20about%20GoPasar%20project.`}
              type={"submit"}
              classes={"primary large simple w-100"}
              value={"Whatsapp"}
            />
          </Col>
        </Form.Row>
      </Form>
    </React.Fragment>
  )
}

export default SimpleForm
