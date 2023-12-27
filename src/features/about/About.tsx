import { About } from "./languageAbout"

import css from "./about.module.css"

interface Props {
  language: About
}

const About = (props: Props) => {
  return (
    <div id="About" className={css.container}>
      <img
        src="https://www.lokkeestudios.com/_astro/lokkee.c5c1cf05.webp"
        alt="Road"
      />
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
