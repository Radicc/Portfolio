import { GameHubIMGs } from "../../_assets/GameHub/gameHub"
import { ReasearchPlatformIMGs2 } from "@/_assets/researchPlatform2/reasearchPlatform2"
import { ReasearchPlatformIMGs } from "../../_assets/reasearchPlatform/reasearchPlatform"
import { KalkulioIMGs } from "../../_assets/kalkulio/kalkulio"

import recoil from "@/_assets/recoil.png"

const firebase = "https://img.icons8.com/color/96/firebase.png"
const htmlLogo = "https://img.icons8.com/color/96/html-5--v1.png"
const tailwind = "https://img.icons8.com/color/96/tailwind_css.png"
const chakra = "https://img.icons8.com/color/96/chakra-ui.png"
const ts = "https://img.icons8.com/color/96/typescript.png"
const reactLogo = "https://img.icons8.com/officel/96/react.png"
const sassLogo = "https://img.icons8.com/color/96/sass.png"
const recoilJS = recoil
const vite = "https://img.icons8.com/fluency/96/vite.png"

export const skills = [
  { name: "HTML", srcIMG: htmlLogo },
  { name: "TAILWIND", srcIMG: tailwind },
  { name: "TYPESCRIPT", srcIMG: ts },
  { name: "REACT", srcIMG: reactLogo },
  { name: "FIREBASE", srcIMG: firebase },
  { name: "RECOIL", srcIMG: recoil },
  { name: "VITE", srcIMG: vite },
]

export interface Projects {
  id: number
  name: string
  img: ProjectsIMG[]
  description: string
  items: Items[]
  linkWebsite: string
  linkGitHub: string
}
interface ProjectsIMG {
  id: string
  logo: string
}
interface Items {
  original: string
  thumbnail: string
}

export const projectsENG = [
  {
    name: "Kalkulio",
    img: [
      { id: "1", logo: htmlLogo },
      { id: "2", logo: tailwind },
      { id: "3", logo: ts },
      { id: "4", logo: reactLogo },
      { id: "5", logo: recoilJS },
      { id: "6", logo: vite },
    ],
    description:
      "Convert your Excel spreadsheets to responsive web calculators. Mark input and output cells, set your own in inputs values and then let the tool do the rest. When your calculator ready, you can embed it in your website or link it to your e-shop via API.",

    items: KalkulioIMGs,
    linkWebsite: "https://www.kalkulio.com/",
    linkGitHub: "",
    id: 0,
  },
  {
    name: "Research Platform 2",
    img: [
      { id: "1", logo: htmlLogo },
      { id: "2", logo: tailwind },
      { id: "3", logo: ts },
      { id: "4", logo: reactLogo },
      { id: "5", logo: vite },
      { id: "6", logo: firebase },
    ],
    description:
      "Second version of free educative investment platform! Our mission is to empower individuals to take control of their financial future by providing them with the knowledge and tools they need to make informed investment decisions. Our platform offers a wide range of educational resources, including books, youtube channels, websites, and retirement calculator all designed to help you learn the basics of investing and grow your wealth. With our user-friendly interface, you’ll be well on your way to achieving your financial goals.",

    items: ReasearchPlatformIMGs2,
    linkWebsite: "https://research-platform-9aef4.web.app/",
    linkGitHub: "https://github.com/Radicc/Research_Platform_2",
    id: 1,
  },
  {
    name: "Research Platform",
    img: [
      { id: "1", logo: htmlLogo },
      { id: "2", logo: sassLogo },
      { id: "3", logo: ts },
      { id: "4", logo: reactLogo },
    ],
    description:
      "Free educative investment platform! Our mission is to empower individuals to take control of their financial future by providing them with the knowledge and tools they need to make informed investment decisions. Our platform offers a wide range of educational resources, including books, youtube channels, websites, and retirement calculator all designed to help you learn the basics of investing and grow your wealth. With our user-friendly interface, you’ll be well on your way to achieving your financial goals.",

    items: ReasearchPlatformIMGs,
    linkWebsite: "https://radicc.github.io/Research_Platform/",
    linkGitHub: "https://github.com/Radicc/Research_Platform",
    id: 2,
  },
  {
    name: "GameHub",
    img: [
      { id: "1", logo: htmlLogo },
      { id: "2", logo: chakra },
      { id: "3", logo: ts },
      { id: "4", logo: reactLogo },
      { id: "5", logo: vite },
    ],
    description:
      "Free to Play game hub! Here you can search for and discover a wide variety of games that are completely free to play. Use our filters to narrow down your search by genre or platform. Whether you’re looking for action-packed adventures or relaxing puzzle games, we’ve got you covered. Start exploring now and find your next favorite game!",

    items: GameHubIMGs,
    linkWebsite: "https://radicc.github.io/GameHub/",
    linkGitHub: "https://github.com/Radicc/GameHub",
    id: 3,
  },
]

export const projectsSK = [
  {
    id: 0,
    name: "Kalkulio",
    img: [
      { id: "1", logo: htmlLogo },
      { id: "2", logo: tailwind },
      { id: "3", logo: ts },
      { id: "4", logo: reactLogo },
      { id: "5", logo: recoilJS },
      { id: "6", logo: vite },
    ],
    description:
      "Preveďte svoje excelové tabuľky na responzívne webové kalkulačky. Označte vstupné a výstupné bunky, nastavte svoje vlastné vstupné hodnoty a potom nechajte nástroj urobiť zvyšok. Keď je vaša kalkulačka hotová, môžete ju vložiť na svoj web alebo prepojiť s vaším e-shopom cez API.",

    items: KalkulioIMGs,
    linkWebsite: "https://www.kalkulio.com/",
    linkGitHub: "",
  },
  {
    id: 1,
    name: "Research Platform 2",
    img: [
      { id: "1", logo: htmlLogo },
      { id: "2", logo: tailwind },
      { id: "3", logo: ts },
      { id: "4", logo: reactLogo },
      { id: "5", logo: vite },
      { id: "6", logo: firebase },
    ],
    description:
      "Druhá verzia bezplatnej vzdelávacej investičnej platforme! Naším poslaním je umožniť jednotlivcom prevziať kontrolu nad svojou finančnou budúcnosťou tým, že im poskytneme znalosti a nástroje, ktoré potrebujú na prijímanie informovaných investičných rozhodnutí. Naša platforma ponúka širokú škálu vzdelávacích zdrojov vrátane kníh, kanálov youtube, webových stránok a kalkulačky odchodu do dôchodku, ktoré sú navrhnuté tak, aby vám pomohli naučiť sa základy investovania a rozšíriť svoje bohatstvo. S naším užívateľsky prívetivým rozhraním budete na dobrej ceste k dosiahnutiu svojich finančných cieľov.",

    items: ReasearchPlatformIMGs2,
    linkWebsite: "https://research-platform-9aef4.web.app/",
    linkGitHub: "https://github.com/Radicc/Research_Platform_2",
  },
  {
    id: 2,
    name: "Research Platform",
    img: [
      { id: "1", logo: htmlLogo },
      { id: "2", logo: sassLogo },
      { id: "3", logo: ts },
      { id: "4", logo: reactLogo },
    ],
    description:
      "Bezplatná vzdelávacia investičná platforma! Naším poslaním je umožniť jednotlivcom prevziať kontrolu nad svojou finančnou budúcnosťou tým, že im poskytneme znalosti a nástroje, ktoré potrebujú na prijímanie informovaných investičných rozhodnutí. Naša platforma ponúka širokú škálu vzdelávacích zdrojov vrátane kníh, kanálov youtube, webových stránok a kalkulačky odchodu do dôchodku, ktoré sú navrhnuté tak, aby vám pomohli naučiť sa základy investovania a rozšíriť svoje bohatstvo. S naším užívateľsky prívetivým rozhraním budete na dobrej ceste k dosiahnutiu svojich finančných cieľov.",

    items: ReasearchPlatformIMGs,
    linkWebsite: "https://radicc.github.io/Research_Platform/",
    linkGitHub: "https://github.com/Radicc/Research_Platform",
  },
  {
    id: 3,
    name: "GameHub",
    img: [
      { id: "1", logo: htmlLogo },
      { id: "2", logo: chakra },
      { id: "3", logo: ts },
      { id: "4", logo: reactLogo },
      { id: "5", logo: vite },
    ],
    description:
      "Knižnica zdarma hier! Tu môžete vyhľadávať a objavovať širokú škálu hier, ktoré sa dajú hrať úplne zadarmo. Použite naše filtre na zúženie vyhľadávania podľa žánru alebo platformy. Či už hľadáte akčné dobrodružstvá alebo relaxačné logické hry. Začnite objavovať teraz a nájdite svoju ďalšiu obľúbenú hru!",

    items: GameHubIMGs,
    linkWebsite: "https://radicc.github.io/GameHub/",
    linkGitHub: "https://github.com/Radicc/GameHub",
  },
]
