import React from "react"
import classes from "./Header.module.css"
import { Nav, Navbar } from "react-bootstrap"
import Badge from "../../../../components/Badges/Badges"
import { AppLogo } from "../../../../components/Icons/Icons"
import Socials from "../Socials/Socials"
import { HashLink } from "react-router-hash-link"

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
            <Nav.Link>
              <HashLink to="/#why">Why</HashLink>
            </Nav.Link>
            <Nav.Link>
              <HashLink to="/#how">How</HashLink>
            </Nav.Link>
            <Nav.Link>
              <HashLink to="/#what">What</HashLink>
            </Nav.Link>
            <Nav.Link>
              <HashLink to="/#contact">Contacts</HashLink>
            </Nav.Link>
          </Nav>
          <div className={classes.mangkuk}>
            <Badge
              store={false}
              bgColor="#03372B"
              link="https://play.google.com/store/apps/details?id=ai.neuon.gopasar"
            />
            <Badge store={true} bgColor={"black"} color={"black"} link="/ios" />
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
