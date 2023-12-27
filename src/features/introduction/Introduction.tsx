import Button from "./Button"
import Skills from "../skills/Skills"

import { Introduction } from "./languageIntroduction"

import css from "./introduction.module.css"

interface Props {
  language: Introduction
}

const Introduction = (props: Props) => {
  return (
    <div id="" className={css.container}>
      <div className={css.introductionWrapper}>
        <div className="flex gap-2">
          <h1 className={css.handEmoji}>✌</h1>
          <h1>{props.language.greeting}</h1>
        </div>

        <h2>{props.language.introduction}</h2>
        <div className={css.flexWrapper}>
          <Button
            text={props.language.button1}
            href="#Projects"
            className={"bg-green-500"}
          />
          <Button
            text={props.language.button2}
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
