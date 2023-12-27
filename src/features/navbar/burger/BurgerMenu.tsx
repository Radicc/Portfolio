import css from "./burger.module.css"

interface Props {
  isOpen: boolean
  setIsOpen: (e: boolean) => void
}

const BurgerMenu = (props: Props) => {
  return (
    <div
      id={css.navIcon2}
      className={props.isOpen ? css.open : ""}
      onClick={() => props.setIsOpen(!props.isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerMenu
