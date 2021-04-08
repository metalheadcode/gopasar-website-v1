import React from "react"
import { Route, Switch } from "react-router-dom"
import { Container } from "reactstrap"
import Header from "./layouts/HeroLayouts/HeroLayoutsTypeSixth/Header/Header.js"
import Homescreen from "./screens/Homescreen.js"
import UnderDevelopement from "./screens/UnderDevelopement.js"
import classes from "./App.module.css"
import FootersLayoutsTypeNinth from "./layouts/FooterLayouts/FootersLayoutsTypeNinth/FootersLayoutsTypeNinth.js"

function App() {
  const dark = false
  return (
    <div className="App">
      <section
        className={`${classes.hero} ${dark ? `dark ${classes.dark}` : ""}`}
      >
        <div className={`${classes.gridWrapper}`}>
          <div className={`${classes.header}`}>
            <Container>
              <Header dark={dark ? true : false} />
            </Container>
          </div>
          <Switch>
            <Route exact path="/">
              <Homescreen />
            </Route>
            <Route exact path="/ios">
              <UnderDevelopement />
            </Route>
          </Switch>

          <FootersLayoutsTypeNinth />
        </div>
      </section>
    </div>
  )
}

export default App
