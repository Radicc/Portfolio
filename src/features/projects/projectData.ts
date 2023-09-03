import htmlLogo from "../../_assets/HTML5logo.png"
import tailwind from "../../_assets/tailwind.png"
import chakra from "../../_assets/chakraLogo.png"
import ts from "../../_assets/TSlogo.png"
import reactLogo from "../../_assets/REACTlogo.png"
import sassLogo from "../../_assets/SASSlogo.png"
import recoilJS from "../../_assets/recoiljsWhite.png"
import vite from "../../_assets/vite.png"

import { GameHubIMGs } from "../../_assets/GameHub/gameHub"
import { ReasearchPlatformIMGs } from "../../_assets/reasearchPlatform/reasearchPlatform"
import { KalkulioIMGs } from "../../_assets/kalkulio/kalkulio"

export const ProjectBoxes = [
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
]
