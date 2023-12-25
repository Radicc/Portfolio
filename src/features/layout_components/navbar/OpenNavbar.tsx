import github from "@/_assets/icons8-github-96.png"

import css from "./openNavbar.module.css"

interface Props {
  setIsOpen: (e: boolean) => void
}

export const socialList = [
  {
    socialName: "GitHub",
    href: "https://github.com/Radicc",
    bgColor: "bg-gray-800",
    bgHover: "hover:bg-gray-700",
    srcIMG: github,
    target: "_Blank",
  },
  {
    socialName: "LinkedIN",
    href: "https://www.linkedin.com/in/tomas-radicc/",
    bgColor: "bg-blue-800",
    bgHover: "hover:bg-blue-700",
    srcIMG: "https://img.icons8.com/fluency/96/linkedin.png",
    target: "_Blank",
  },
]

const englishNav = [
  { id: "", text: "DOMOV" },
  { id: "About", text: "O MNE" },
  { id: "Projects", text: "PROJEKTY" },
  { id: "Services", text: "SERVIS" },
]
const listNav = englishNav

const OpenNavbar = (props: Props) => {
  const closeNav = () => {
    props.setIsOpen(false)
  }

  return (
    <div className={css.container}>
      <ul className={css.ulContainer}>
        {listNav.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={() => closeNav()}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
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
    </div>
  )
}

export default OpenNavbar
