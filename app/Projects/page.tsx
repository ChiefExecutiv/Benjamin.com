import Image from "next/image"
import Link from "next/link"
import { GeistMono } from "geist/font/mono"

const projects = [
  {
    title: "Dum.E",
    description: "Dum.E is a minimalist implementation of the gpt-2 architecture trained on a rudimentary dataset.",
    image: "/avatars/gpt_arch_2.png",
    technologies: ["Python,", "PyTorch,", "GoogleColab"],
    githubLink: "https://github.com/ChiefExecutiv/DumE",
  },
  {
    title: "English-Luganda Translator",
    description: "My first implementation of the Transformer architecture was to create a model that translates English phrases to Luganda",
    image: "/avatars/Screenshot (203).png",
    technologies: ["Python,", "Tensorflow,", "Keras"],
    githubLink: "https://github.com/ChiefExecutiv/English-Luganda/blob/main/Translate_tfmr.py",
  },
  {
    title: "Uganda's Budget Visualized",
    description: "A sankey visualization of Uganda's Budget",
    image: "/avatars/Screenshot (201).png",
    technologies: ["HTML, ", "D3.js"],
    githubLink: "https://chiefexecutiv.github.io/Uganda-Budget-Sankey/",
  },

]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto  max-w-3xl">
      
      <h1 className="mt-5 mb-8 ">
              Here are a few projects that I made: 
      </h1>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col space-y-4 mt-5">
            <Image 
              src={project.image} 
              alt={`${project.title} preview`} 
              width={500}
              height={500}
              className="grayscale hover:grayscale-0 transition-all duration-300 w-full aspect-video object-cover max-h-[300px]"
            />

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-500">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                  key={techIndex} 
                  className="text-sm text-gray-600 flex items-center"
                >
                  {tech}
                </span>
                ))}
              </div>
            </div>
            <div className="flex justify-start space-x-4 mt-auto ">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 text-sm font-medium  inline-flex items-center text-primary hover:underline mt-1 transition-colors duration-300`}>
                View Project
              </Link>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}