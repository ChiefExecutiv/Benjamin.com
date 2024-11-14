import Image from "next/image"
import Link from "next/link"
import { GeistMono } from "geist/font/mono"

const projects = [
  {
    title: "Uganda's Budget Visualized",
    description: "A sankey visualization of Uganda's Budget",
    image: "/avatars/Screenshot (201).png",
    technologies: ["HTML", "D3.js"],
    githubLink: "https://chiefexecutiv.github.io/Uganda-Budget-Sankey/",
  },
  {
    title: "English to Luganda Translator",
    description: "A Machine Translation implementation for translating English to Luganda. Adapted from the Transformer Architecture",
    image: "/avatars/Screenshot (203).png",
    technologies: ["Python", "Tensorflow", "Keras"],
    githubLink: "https://github.com/ChiefExecutiv/English-Luganda/blob/main/Translate_tfmr.py",
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
              className="w-full aspect-video object-cover max-h-[300px] border border-gray-300"
            />

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                  key={techIndex} 
                  className="text-sm text-gray-600 flex items-center"
                >
                  <span className="mr-2">•</span>
                  {tech}
                </span>
                ))}
              </div>
            </div>
            <div className="flex justify-start space-x-4 mt-auto ">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`${GeistMono.className} text-blue-700 text-sm font-medium  inline-flex items-center text-primary hover:underline mt-1 transition-colors duration-300`}>
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}