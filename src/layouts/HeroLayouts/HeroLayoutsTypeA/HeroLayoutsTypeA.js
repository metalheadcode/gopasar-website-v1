import React from "react"
import RightImage from "../../../img/young-woman-controlling-plantation-min.jpg"
import classes from "./HeroLayoutsTypeA.module.css"

const HeroLayoutsTypeA = (props) => {
  return (
    <>
      <section
        className={`${classes.hero} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
      >
        <img src={RightImage} alt="farmer" />
      </section>
    </>
  )
}
export default HeroLayoutsTypeA
