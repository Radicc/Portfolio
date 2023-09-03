import Button from "./Button"

import profileAvatar from "../../_assets/TomasRadic.jpg"
import css from "./introduction.module.css"

const Introduction = () => {
  return (
    <div className={css.container}>
      <div className={css.introductionWrapper}>
        <h1>✌ Hi There! I'm Tomáš Radič</h1>
        <h2>A Frontend developer</h2>
        <p>
          Frontend-focused web developer based in Slovakia with a passion for
          creating aesthetically pleasing and user-friendly websites.
          Specializing in ReactJS library.
        </p>

        <div>
          <Button text="Projects" href="#Projects" />
          <Button text="Resume" href="#Resume" onClick={() => {}} />
          <Button text="Contact" href="#Contact" onClick={() => {}} />
        </div>
      </div>
      <img src={profileAvatar} className={css.profileAvatar} />
    </div>
  )
}

export default Introduction
