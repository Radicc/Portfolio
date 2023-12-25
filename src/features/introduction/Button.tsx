import css from "./button.module.css"

interface Props {
  text: string
  href?: string
  className?: string
  onClick?: () => void
}

const Button = (props: Props) => {
  return (
    <a
      onClick={props.onClick}
      className={`${css.container} ${props.className}`}
      href={props.href}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </a>
  )
}

export default Button
