import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import { ProjectBoxes } from "./projectData"
import Button from "../introduction/Button"

import css from "./projects.module.css"

const Projects = () => {
  return (
    <div id="Projects" className={css.container}>
      <h1 className={css.title}>Projects</h1>
      {ProjectBoxes.map((project, i) => (
        <div
          key={project.id}
          className={`${css.projectWrapper} ${i % 2 != 0 && "bg-gray-900"}`}
        >
          <div className={`${css.infoWrapper} ${i % 2 != 0 && "order-2"}`}>
            <h1>{project.name}</h1>
            <div className={css.galleryMobileWrapper}>
              <ImageGallery items={project.items} />
            </div>
            <p>{project.description}</p>
            <div className={css.logoWrapper}>
              {project.img.map((item) => (
                <img key={item.id} src={item.logo} />
              ))}
            </div>
            <span>
              {project.linkGitHub && (
                <Button
                  text="GitHub"
                  onClick={() => window.open(project.linkGitHub)}
                />
              )}
              <Button
                text="Live"
                onClick={() => window.open(project.linkWebsite)}
              />
            </span>
          </div>
          <div className={css.galleryWrapper}>
            <ImageGallery items={project.items} />
          </div>
        </div>
      ))}
    </div>
  )
}
export default Projects
