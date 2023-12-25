import Button from "./Button"
import Skills from "../skills/Skills"
import css from "./introduction.module.css"

const Introduction = () => {
  return (
    <div id="" className={css.container}>
      <div className={css.introductionWrapper}>
        <div className="flex gap-2">
          <h1 className={css.handEmoji}>✌</h1>
          <h1>Dobrý deň, vitajte.</h1>
        </div>

        <h2>
          A Frontend developer builds the front-end portion of websites and web
          applications
        </h2>
        <div className={css.flexWrapper}>
          <Button
            text="Moja práca"
            href="#Projects"
            className={"bg-green-500"}
          />
          <Button
            text="Pozri služby"
            href="#Services"
            className={"border border-green-500 text-gray-300"}
          />
        </div>
      </div>
      <Skills />
    </div>
  )
}

export default Introduction
