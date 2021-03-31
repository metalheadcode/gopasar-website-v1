import React from "react"
import classes from "./Header.module.css"
import { Nav, Navbar, Form, FormControl } from "react-bootstrap"
import Badge from "../../../../components/Badges/Badges"
import { AppLogo } from "../../../../components/Icons/Icons"
import Socials from "../Socials/Socials"
import { HashLink } from "react-router-hash-link"
import { Input } from "antd"
const { Search } = Input

const Header = (props) => {
  return (
    <section
      className={`${classes.header} ${
        props.dark ? `dark ${classes.dark}` : ""
      }`}
    >
      <Navbar collapseOnSelect expand="lg" className="p-0">
        <div className={classes.wrapper}>
          <Navbar.Brand href="#home">
            <AppLogo />
          </Navbar.Brand>
          <div className={classes.search}>
            <Search
              onSearch={(value) => console.log(value)}
              style={{ width: 150 }}
            />
          </div>
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
          <Badge
            isAppStore={false}
            color="#03372B"
            link="https://play.google.com/store/apps/details?id=ai.neuon.gopasar"
          />
          <div className={classes.hiddenElements}>
            <Form className="form">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
            <Socials />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </section>
  )
}

export default Header
