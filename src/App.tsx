import Navbar from "./features/layout_components/navbar/Navbar"
import Introduction from "./features/introduction/Introduction"
import Projects from "./features/projects/Projects"

import css from "./App.module.css"
import Resume from "./features/resume/Resume"
import Contact from "./features/contact/Contact"

const App = () => {
  return (
    <div id="Home" className={css.container}>
      <Navbar />
      <Introduction />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}
export default App
