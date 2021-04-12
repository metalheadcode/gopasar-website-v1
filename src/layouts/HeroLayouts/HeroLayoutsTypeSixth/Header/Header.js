import React from "react"
import classes from "./Header.module.css"
import { Nav, Navbar } from "react-bootstrap"
import Badge from "../../../../components/Badges/Badges"
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
            <Badge
              target={"_blank"}
              store={false}
              bgColor="#03372B"
              link="https://play.google.com/store/apps/details?id=ai.neuon.gopasar"
            />
            <Badge
              target
              store={true}
              bgColor={"black"}
              color={"black"}
              link="/ios"
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
