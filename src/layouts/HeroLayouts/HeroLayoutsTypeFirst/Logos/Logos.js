import React from "react"
import classes from "./Logos.module.css"
import {
  EmmaLogo,
  FlinkenLogo,
  NeuonLogo,
  WormingUp,
  GoTani,
  DanaFresh,
} from "../../../../components/Icons/Icons.js"

const Logos = (props) => {
  return (
    <section
      className={`${classes.logos} ${props.dark ? `dark ${classes.dark}` : ""}`}
    >
      <div className="row">
        <div className="col-auto">
          <GoTani fill="black" />
        </div>
        <div className="col-auto">
          <EmmaLogo fill="black" />
        </div>
        <div className="col-auto">
          <DanaFresh fill="black" />
        </div>
        <div className="col-auto">
          <FlinkenLogo fill="black" />
        </div>
        <div className="col-auto">
          <NeuonLogo fill="black" />
        </div>
        <div className="col-auto">
          <WormingUp fill="black" />
        </div>
      </div>
    </section>
  )
}

export default Logos
