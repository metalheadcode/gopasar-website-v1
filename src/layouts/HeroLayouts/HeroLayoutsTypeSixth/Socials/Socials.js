import React from "react"
import { LinkedIn, Twitter, Google } from "../../../../components/Icons/Icons"
import SocialsLinks from "../../../../components/Socials/Socials"
import Oval from "../../../../components/Frame/Frame"

const Socials = (props) => {
  return (
    <div className="socials">
      <p>Follow us</p>
      <SocialsLinks>
        <a href="www.facebook.com">
          <Oval variant="normal">
            <Twitter />
          </Oval>
        </a>
        <a href="www.twitter">
          <Oval variant="normal">
            <LinkedIn />
          </Oval>
        </a>
        <a href="www.youtube.com">
          <Oval variant="normal">
            <Google />
          </Oval>
        </a>
      </SocialsLinks>
    </div>
  )
}

export default Socials
