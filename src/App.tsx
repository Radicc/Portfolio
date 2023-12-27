import { useEffect, useState } from "react"
import {
  LanguageValues,
  languageDropDown,
} from "./features/languageDropDown/languageData"
import { English, Language, Slovak } from "./features/language"

import LanguageDropDown from "@/features/languageDropDown/LanguageDropDown"
import Navbar from "./features/navbar/Navbar"
import About from "./features/about/About"
import Introduction from "./features/introduction/Introduction"
import Projects from "./features/projects/Projects"
import Services from "./features/services/Services"

import css from "./App.module.css"

const App = () => {
  const currentLanguage = Number(
    JSON.parse(localStorage.getItem("language") || "0")
  )
  const [values, setValues] = useState<LanguageValues[]>([
    languageDropDown[currentLanguage],
  ])
  const [language, setLanguage] = useState<Language>(Slovak)

  useEffect(() => {
    if (values[0].id === 2) {
      setLanguage(English)
      localStorage.setItem("language", JSON.stringify(values[0].id - 1))
    } else {
      setLanguage(Slovak)
      localStorage.setItem("language", JSON.stringify(values[0].id - 1))
    }
  }, [values])

  return (
    <div id="Home" className={css.container}>
      <LanguageDropDown values={values} setValues={(e) => setValues(e)} />
      <Navbar language={language.nav} />
      <Introduction language={language.introduction} />
      <About language={language.about} />
      <Projects language={language.projects} />
      <Services language={language.services} />
    </div>
  )
}
export default App
