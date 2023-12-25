import { FaCheckCircle } from "react-icons/fa"
import { FaPlusCircle } from "react-icons/fa"
import { dataList } from "./serviceData"

import css from "./services.module.css"

const Services = () => {
  return (
    <div id="Services" className={css.container}>
      <div className={css.wrapperTextTitle}>
        <h1>SERVICES</h1>
        <h2>Launching visions, building websites</h2>
        <p>
          Secure your seat, fasten your seatbelt, and join me on an interstellar
          journey to turn your website vision into a next level reality.
        </p>
      </div>

      <div className={css.flexWrapper}>
        <div className={css.wrapperTextServices}>
          <h1>Web application</h1>
          <h2>Individual price</h2>
          <p>
            Whether you want a web app, paired with a marketing website, or a
            cross-platform app, I got you covered.Let's get together and discuss
            a high quality quote based on the scale of your vision!
          </p>
          <ul>
            {dataList.Websites.map((item) => (
              <li>
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
          <h1>Website</h1>
          <h2>600€</h2>
          <p>
            There are no limits to your website vision ― Let's make it happen!
          </p>
          <ul>
            {dataList.WebApps.map((item) => (
              <li>
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
