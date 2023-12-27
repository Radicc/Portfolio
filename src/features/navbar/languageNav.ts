export interface Nav {
  navClosed: NavClosed
  navOpen: NavOpen
}
export interface NavClosed {
  navigation: Navigation[]
  button: Navigation
}
export interface Navigation {
  text: string
  href: string
  target: string
}

export interface NavOpen {
  navigation: Navigation[]
}

export const navENG = {
  navClosed: {
    navigation: [
      { text: "About", href: "#About", target: "_self" },
      { text: "Projects", href: "#Projects", target: "_self" },
      {
        text: "Contact",
        href: "https://www.linkedin.com/in/tomas-radicc/",
        target: "_blank",
      },
    ],
    button: {
      text: "Hit Me Up",
      href: "https://www.linkedin.com/in/tomas-radicc/",
      target: "_blank",
    },
  },
  navOpen: {
    navigation: [
      { text: "HOME", href: "", target: "_self" },
      { text: "ABOUT", href: "About", target: "_self" },
      { text: "PROJECTS", href: "Projects", target: "_self" },
      { text: "SERVISES", href: "Services", target: "_self" },
    ],
  },
}

export const navSK = {
  navClosed: {
    navigation: [
      { text: "O Mne", href: "#About", target: "_self" },
      { text: "Projekty", href: "#Projects", target: "_self" },
      {
        text: "Kontakt",
        href: "https://www.linkedin.com/in/tomas-radicc/",
        target: "_blank",
      },
    ],
    button: {
      text: "Napíš Mi",
      href: "https://www.linkedin.com/in/tomas-radicc/",
      target: "_blank",
    },
  },
  navOpen: {
    navigation: [
      { text: "DOMOV", href: "", target: "_self" },
      { text: "O MNE", href: "About", target: "_self" },
      { text: "PROJEKTY", href: "Projects", target: "_self" },
      { text: "SERVIS", href: "Services", target: "_self" },
    ],
  },
}
