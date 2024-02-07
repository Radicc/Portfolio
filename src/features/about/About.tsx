import { About } from "./languageAbout"
import aboutIMG from "@/_assets/about.jpg"

import css from "./about.module.css"

interface Props {
  language: About
}

const About = (props: Props) => {
  return (
    <div id="About" className={css.container}>
      <img src={aboutIMG} alt="Road" />
      <div className={css.aboutTextWrapper}>
        <span>
          <h1>{props.language.title}</h1>
          <h2>{props.language.section}</h2>
          <p>{props.language.aboutText}</p>
        </span>
      </div>
    </div>
  )
}

export default About
