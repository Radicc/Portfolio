import css from "./contact.module.css"

const Contact = () => {
  return (
    <div id="Contact" className={css.container}>
      <h1 className={css.title}>Contact</h1>
      <form
        className={css.formWrapper}
        action="https://formsubmit.co/tomas.radic00@gmail.com"
        method="POST"
      >
        <div>
          <h2>Name</h2>
          <input
            type="text"
            id="name"
            name="name"
            spellCheck="false"
            required
          />
        </div>

        <div>
          <h2>Email</h2>
          <input
            type="email"
            id="email"
            name="email"
            spellCheck="false"
            required
          />
        </div>

        <div>
          <h2>Phone Number</h2>
          <input
            type="number"
            id="phone"
            name="phone"
            spellCheck="false"
            required
          />
        </div>

        <div className={css.messageWrapper}>
          <h2>Message</h2>
          <textarea id="message" name="message" spellCheck="false" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
