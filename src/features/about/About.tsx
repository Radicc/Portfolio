import css from "./about.module.css"

const About = () => {
  return (
    <div id="About" className={css.container}>
      <img src="https://www.lokkeestudios.com/_astro/lokkee.c5c1cf05.webp" />
      <div className={css.aboutTextWrapper}>
        <span>
          <h1>O MNE</h1>
          <h2>MOJA CESTA</h2>
          <p>
            Moje meno je Tomáš, zapálený freelancer z Malaciek, Slovensko,
            prinášam vám webový vývoj a dizajn z budúcnosti. Moja odbornosť je
            vývoj webových stránok a webových aplikácií na úrovni vrátane
            úplných frontendových dizajnu.
          </p>
        </span>
      </div>
    </div>
  )
}

export default About
