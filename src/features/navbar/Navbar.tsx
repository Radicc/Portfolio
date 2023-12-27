import { useState } from "react"

import { Nav } from "./languageNav"

import OpenNavbar from "./openNav/OpenNavbar"
import BurgerMenu from "./burger/BurgerMenu"

import css from "./navbar.module.css"

interface Props {
  language: Nav
}

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.NavSection}>
          {props.language.navClosed.navigation.map((item, i) => (
            <a
              key={i}
              className={css.sectionA}
              href={item.href}
              target={item.target}
            >
              {item.text}
            </a>
          ))}
        </div>

        <a className={css.radicc} href="/">
          TOMAS RADICC
        </a>

        <div className="px-5 text-end">
          <a
            className={css.hitMeUP}
            href={props.language.navClosed.button.href}
            target={props.language.navClosed.button.target}
          >
            {props.language.navClosed.button.text}
          </a>
        </div>
      </div>

      <BurgerMenu isOpen={isOpen} setIsOpen={(e) => setIsOpen(e)} />
      {isOpen && (
        <OpenNavbar
          setIsOpen={(e) => setIsOpen(e)}
          language={props.language.navOpen}
        />
      )}
    </div>
  )
}
export default Navbar
