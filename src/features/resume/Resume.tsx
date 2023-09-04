import { FaFileDownload } from "react-icons/fa"

import resumeENG from "../../_assets/resumeENG.jpg"
import resumeSVK from "../../_assets/resumeSVK.jpg"
import css from "./resume.module.css"

const Resume = () => {
  return (
    <div id="Resume" className={css.container}>
      <h1 className={css.title}>Resume</h1>
      <div className={css.blockWrapper}>
        <div className={css.resumeWrapper}>
          <h1>English</h1>

          <FaFileDownload size={"3rem"} className={css.iconDownload} />
          <a
            download="Tomáš_Radič_-_Frontend_DeveloperENG.pdf"
            href="https://raw.githubusercontent.com/Radicc/portfolio/96f735b08acf4fd3342a8c1eb61c38623c230d03/src/_assets/resumePDF/Tom%C3%A1%C5%A1_Radi%C4%8D_-_Frontend_DeveloperENG.pdf"
          >
            <img src={resumeENG} />
          </a>
        </div>
        <div className={css.resumeWrapper}>
          <h1>Slovak</h1>
          <FaFileDownload size={"3rem"} className={css.iconDownload} />
          <a
            download="Tomáš_Radič-Frontend_Developer.pdf"
            href="../../_assets/resumePDF/Tomáš_Radič-Frontend_Developer.pdf"
          >
            <img src={resumeSVK} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume
