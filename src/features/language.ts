import { About, aboutENG, aboutSK } from "./about/languageAbout"
import { Projects, projectsENG, projectsSK } from "./projects/languageProjects"
import { Services, servicesENG, servicesSK } from "./services/serviceData"
import { Nav, navENG, navSK } from "./navbar/languageNav"
import {
  Introduction,
  introductionENG,
  introductionSK,
} from "./introduction/languageIntroduction"

export interface Language {
  nav: Nav
  introduction: Introduction
  about: About
  projects: Projects[]
  services: Services
}

export const English = {
  nav: navENG,
  introduction: introductionENG,
  about: aboutENG,
  projects: projectsENG,
  services: servicesENG,
}
export const Slovak = {
  nav: navSK,
  introduction: introductionSK,
  about: aboutSK,
  projects: projectsSK,
  services: servicesSK,
}
