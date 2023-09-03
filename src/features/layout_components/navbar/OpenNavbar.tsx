import GitHub from "../../../_assets/GitHub.png"
import LinkedIN from "../../../_assets/linkedIN.png"
import Mail from "../../../_assets/mail2.png"

import css from "./openNavbar.module.css"

interface Props {
  setIsOpen: (e: boolean) => void
}

const socialList = [
  {
    socialName: "GitHub",
    href: "https://github.com/Radicc",
    bgColor: "bg-gray-800",
    bgHover: "hover:bg-gray-700",
    srcIMG: GitHub,
    target: "_Blank",
  },
  {
    socialName: "LinkedIN",
    href: "https://www.linkedin.com/in/tomas-radicc/",
    bgColor: "bg-blue-800",
    bgHover: "hover:bg-blue-700",
    srcIMG: LinkedIN,
    target: "_Blank",
  },
  {
    socialName: "Mail",
    href: "#Contact",
    bgColor: "bg-green-700",
    bgHover: "hover:bg-green-600",
    srcIMG: Mail,
    target: "",
  },
]

const englishNav = ["Home", "Projects", "Resume", "Contact"]
const listNav = englishNav

const OpenNavbar = (props: Props) => {
  const closeNav = () => {
    props.setIsOpen(false)
  }

  return (
    <div className={css.container}>
      <div className={css.containerSocial}>
        {socialList.map((social, i) => (
          <a
            key={i}
            className={`${css.social} ${social.bgColor} ${social.bgHover}`}
            href={social.href}
            target={social.target}
            onClick={() => !social.target && closeNav()}
          >
            <img className={css.imgSocial} src={social.srcIMG} />
            <p className={css.socialText}>{social.socialName}</p>
          </a>
        ))}
      </div>

      <ul className={css.ulContainer}>
        {listNav.map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={() => closeNav()}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OpenNavbar
