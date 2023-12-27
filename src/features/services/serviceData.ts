export interface Services {
  title: string
  section: string
  textSection: string
  Websites: Content
  WebApps: Content
}

export interface Content {
  title: string
  section: string
  textSection: string
  points: Points[]
}

export interface Points {
  text: string
  isIncluded: boolean
}

export const servicesENG = {
  title: "SERVICES",
  section: "Launching visions, building websites",
  textSection:
    "Secure your seat, fasten your seatbelt, and join me on an interstellar journey to turn your website vision into a next level reality.",
  Websites: {
    title: "Website",
    section: "600€",
    textSection:
      "There are no limits to your website vision ― Let's make it happen!",
    points: [
      { text: "Unique, modern, customized design", isIncluded: true },
      { text: "Responsive, accessible development", isIncluded: true },
      { text: "Animations & interactions", isIncluded: true },
      { text: "Optimized perfomance", isIncluded: true },
      { text: "Intuitive user flow", isIncluded: true },
      { text: "Catch-up meetings & close communication", isIncluded: true },
      { text: "Hosting (including domain) setup | €200", isIncluded: false },
      { text: "CMS implementation | €500", isIncluded: false },
      { text: "Multilingual support | €700", isIncluded: false },
      { text: "Analytics | €150", isIncluded: false },
    ],
  },
  WebApps: {
    title: "Web application",
    section: "Individual price",
    textSection:
      "Whether you want a web app, paired with a marketing website, or a cross-platform app, I got you covered.Let's get together and discuss a high quality quote based on the scale of your vision!",
    points: [
      { text: "Unique, modern, customized design", isIncluded: true },
      { text: "Responsive, accessible development", isIncluded: true },
      { text: "Animations & interactions", isIncluded: true },
      { text: "Enduring, memorable user experience", isIncluded: true },
      { text: "SEO & page speed optimization", isIncluded: true },
      { text: "Catch-up meetings & close communication", isIncluded: true },
      { text: "Multi-platform support | Individual price", isIncluded: false },
    ],
  },
}

export const servicesSK = {
  title: "SERVIS",
  section: "Spúšťanie vízií, budovanie webových stránok",
  textSection:
    "Zaistite si miesto, zapnite si pás a pripojte sa ku mne na medzihviezdnej ceste, aby ste premenili víziu svojej webovej stránky na realitu.",

  Websites: {
    title: "Website",
    section: "600€",
    textSection: "Vízii vašej webovej stránky sa medze nekladú – poďme na to!",
    points: [
      { text: "Jedinečný, moderný, prispôsobený dizajn", isIncluded: true },
      { text: "Responzívny a prístupný vývoj", isIncluded: true },
      { text: "Animácie a interakcie", isIncluded: true },
      { text: "Optimalizovaný výkon", isIncluded: true },
      { text: "Intuitívny užívateľský prostredie", isIncluded: true },
      { text: "Dobiehacie stretnutia a úzka komunikácia", isIncluded: true },
      { text: "Hosting (vrátane domain) nastavenia | €200", isIncluded: false },
      { text: "CMS implementáciu | €500", isIncluded: false },
      { text: "Viacjazyčná podpora | €700", isIncluded: false },
      { text: "Analytics | €150", isIncluded: false },
    ],
  },

  WebApps: {
    title: "Web application",
    section: "Individuálna cena",
    textSection:
      "Či už chcete webovú aplikáciu spárovanú s marketingovou webovou stránkou alebo aplikáciu naprieč platformami, poradím vám. Spojme sa a prediskutujte kvalitnú cenovú ponuku na základe rozsahu vašej vízie!",
    points: [
      { text: "Jedinečný, moderný, prispôsobený dizajn", isIncluded: true },
      { text: "Responzívny a prístupný vývoj", isIncluded: true },
      { text: "Animácie a interakcie", isIncluded: true },
      {
        text: "Trvalý, nezabudnuteľný používateľský zážitok",
        isIncluded: true,
      },
      { text: "SEO & optimalizácia rýchlosti stránky", isIncluded: true },
      { text: "Dobiehacie stretnutia a úzka komunikácia", isIncluded: true },
      {
        text: "Podpora viacerých platforiem | Individuálna cena",
        isIncluded: false,
      },
    ],
  },
}
