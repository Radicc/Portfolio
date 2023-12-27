import { useEffect, useState } from "react"
import {
  LanguageValues,
  languageDropDown,
} from "./features/languageDropDown/languageData"

import { English, Slovak } from "./features/language"

import LanguageDropDown from "@/features/languageDropDown/LanguageDropDown"
import Navbar from "./features/navbar/Navbar"
import About from "./features/about/About"
import Introduction from "./features/introduction/Introduction"
import Projects from "./features/projects/Projects"
import Services from "./features/services/Services"

import css from "./App.module.css"

const App = () => {
  const [values, setValues] = useState<LanguageValues[]>([languageDropDown[0]])
  const [language, setLanguage] = useState(Slovak)

  useEffect(() => {
    values[0].id === 2 ? setLanguage(English) : setLanguage(Slovak)
  }, [values])

  return (
    <div id="Home" className={css.container}>
      <LanguageDropDown values={values} setValues={(e) => setValues(e)} />
      <Navbar language={language.nav} />
      <Introduction language={language.introduction} />
      <About language={language.about} />
      <Projects language={language.projects} />
      <Services />
    </div>
  )
}
export default App
