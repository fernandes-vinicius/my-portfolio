import Image from 'next/image'

import { IProject } from '@/services/get-projects'

interface ProjectCardProps {
  project: IProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="bg-white border-gray-200 border shadow-base relative h-full
      rounded-2xl p-2 group overflow-hidden hover:scale-105 hover:transform
      hover:-rotate-2 hover:cursor-pointer transition"
    >
      <Image
        className="object-cover"
        src={project.image_path}
        priority
        sizes="100%"
        alt=""
        fill
      />

      <div
        className="bg-white bg-opacity-90 opacity-0 group-hover:opacity-100
        absolute left-0 bottom-0 w-full h-full flex flex-col justify-end p-6
        transition"
      >
        <h4
          className="bg-white text-indigo-600 font-bold text-ellipsis py-2
          px-3 mb-2 rounded-lg shadow-base whitespace-nowrap overflow-hidden"
        >
          {project.name}
        </h4>

        <div
          className="bg-white text-gray-900 py-2 px-3 rounded-lg
          shadow-base"
        >
          {project.description}
        </div>
      </div>
    </div>
  )
}
