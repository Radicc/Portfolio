import css from "./button.module.css"

interface Props {
  text: string
  href?: string
  onClick?: () => void
}

const Button = ({ text, href, onClick }: Props) => {
  return (
    <a onClick={onClick} className={css.container} href={href}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </a>
  )
}

export default Button
