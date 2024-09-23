import CustomLink from "./linkItem";
import styles from '@/app/ui/home.module.css';

export default function Dashboard() {

  const Projects = [
    {
      project_Id: 1,
      projectName: "Image Segmentation",
      projectLink: "https://github.com/ChiefExecutiv/Ben_Detectron/blob/main/Ben_Detectron%20(1).ipynb",
      projectDescription: "Deep Learning"
    }
  ]

    return (
      <>
          <h1 className="mt-5">
              Here a few of the projects I created or still creating: 
          </h1>

          <div className="flex flex-col mt-5">
              {Projects.map((project) => (
                  <CustomLink key={project.project_Id} href={project.projectLink} className="flex gap-4 no-underline py-2 ">
                    <div className="flex-1 whitespace-nowrap">
                      {project.projectName}
                    </div>
                    <div className={styles.graytext}>
                      {project.projectDescription}
                    </div>
                  </CustomLink> 
              ))}
          </div>
      </>
    )
  }