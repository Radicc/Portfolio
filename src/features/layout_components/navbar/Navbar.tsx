import { useState } from "react"
import OpenNavbar from "./OpenNavbar"
import BurgerMenu from "./BurgerMenu"

import css from "./navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.NavSection}>
          <a className={css.sectionA} href="#About">
            O MNE
          </a>
          <a className={css.sectionA} href="#Projects">
            PROJEKTY
          </a>
          <a
            className={css.sectionA}
            href="https://www.linkedin.com/in/tomas-radicc/"
            target="_blank"
          >
            KONTAKT
          </a>
        </div>

        <a className={css.radicc} href="/">
          TOMAS RADICC
        </a>
        <div className="px-5 text-end">
          <a
            className={css.hitMeUP}
            href="https://www.linkedin.com/in/tomas-radicc/"
            target="_blank"
          >
            NAPIŠ MI
          </a>
        </div>
      </div>

      <BurgerMenu isOpen={isOpen} setIsOpen={(e) => setIsOpen(e)} />
      {isOpen && <OpenNavbar setIsOpen={(e) => setIsOpen(e)} />}
    </div>
  )
}
export default Navbar
