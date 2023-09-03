import { useState } from "react"
import OpenNavbar from "./OpenNavbar"
import css from "./navbar.module.css"

import BurgerMenu from "./BurgerMenu"

interface Props {}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={css.container}>
        <a className={css.Radicc} href="#Home">
          RADICC
        </a>
        <BurgerMenu isOpen={isOpen} setIsOpen={(e) => setIsOpen(e)} />
      </div>
      {isOpen && <OpenNavbar setIsOpen={(e) => setIsOpen(e)} />}
    </>
  )
}
export default Navbar
