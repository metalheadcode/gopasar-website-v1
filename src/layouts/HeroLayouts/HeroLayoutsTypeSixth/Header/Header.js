import React from "react"
import classes from "./Header.module.css"
import { Nav, Navbar } from "react-bootstrap"
import Button from "../../../../components/Button/Button.js"
import { AppLogo } from "../../../../components/Icons/Icons"
import Socials from "../Socials/Socials"

const Header = (props) => {
  return (
    <section
      className={`${classes.header} ${
        props.dark ? `dark ${classes.dark}` : ""
      }`}
    >
      <Navbar collapseOnSelect expand="lg" className="p-0">
        <div className={classes.wrapper}>
          <Navbar.Brand href="/">
            <AppLogo />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="custom-toggler"
          />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey="1" href="/#why">
              Why
            </Nav.Link>
            <Nav.Link eventKey="2" href="/#how">
              How
            </Nav.Link>
            <Nav.Link eventKey="3" href="/#what">
              What
            </Nav.Link>
            <Nav.Link eventKey="4" href="/#contact">
              Contact
            </Nav.Link>
          </Nav>
          <div className={classes.mangkuk}>
            <Button
              link={true}
              target={"_blank"}
              href={"https://gopasar.today/admin-page/login/"}
              type={"submit"}
              classes={"secondary large simple w-100"}
              value={"Login"}
            />
          </div>
          <div className={classes.hiddenElements}>
            <Socials />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </section>
  )
}

export default Header
