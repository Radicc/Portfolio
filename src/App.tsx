import Navbar from "./features/layout_components/navbar/Navbar"
import About from "./features/about/About"
import Introduction from "./features/introduction/Introduction"
import Projects from "./features/projects/Projects"
import Services from "./features/services/Services"

import css from "./App.module.css"

const App = () => {
  return (
    <div id="Home" className={css.container}>
      <Navbar />
      <Introduction />
      <About />
      <Projects />
      <Services />
    </div>
  )
}
export default App
