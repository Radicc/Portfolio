import { FaCheckCircle } from "react-icons/fa"
import { FaPlusCircle } from "react-icons/fa"
import { Services } from "./serviceData"

import css from "./services.module.css"

interface Props {
  language: Services
}

const Services = (props: Props) => {
  return (
    <div id="Services" className={css.container}>
      <div className={css.wrapperTextTitle}>
        <h1>{props.language.title}</h1>
        <h2>{props.language.section}</h2>
        <p>{props.language.textSection}</p>
      </div>

      <div className={css.flexWrapper}>
        <div className={css.wrapperTextServices}>
          <h1>{props.language.WebApps.title}</h1>
          <h2>{props.language.WebApps.section}</h2>
          <p>{props.language.WebApps.textSection}</p>
          <ul>
            {props.language.WebApps.points.map((item, i) => (
              <li key={i}>
                {item.isIncluded ? (
                  <FaCheckCircle />
                ) : (
                  <FaPlusCircle className="opacity-60" />
                )}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.wrapperTextServices}>
          <h1>{props.language.Websites.title}</h1>
          <h2>{props.language.Websites.section}</h2>
          <p>{props.language.Websites.textSection}</p>
          <ul>
            {props.language.Websites.points.map((item, i) => (
              <li key={i}>
                {item.isIncluded ? (
                  <FaCheckCircle />
                ) : (
                  <FaPlusCircle className="opacity-60" />
                )}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
