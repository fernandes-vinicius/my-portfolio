import type { IProject } from '@/services/get-projects'
import { Container } from '@/app/components/Container'
import { TextLink } from '@/app/components/TextLink'

import { ProjectCard } from './ProjectCard'

interface PortfolioProps {
  projects: IProject[]
}

export function Portfolio({ projects }: PortfolioProps) {
  return (
    <section id="portfolio">
      <Container className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 items-center">
        <div className="flex flex-col gap-5 mb-5 lg:mb-0">
          <span className="text-indigo-600">Meus trabalhos</span>

          <h2 className="text-indigo-900">
            Veja alguns dos meus trabalhos mais recentes!
          </h2>

          <p>
            Um bom desenvolvedor deve priorizar por agilidade e segurança,
            interfaces bem documentadas, limpas, fáceis e elegantes para
            qualquer tipo de usuário.
          </p>
        </div>

        {projects.map((project) => {
          return (
            <a
              key={project.id}
              href={project.demo_url || project.code_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[18rem] sm:h-auto sm:square"
            >
              <ProjectCard project={project} />
            </a>
          )
        })}

        <div className="h-full flex items-center justify-center p-5">
          <a
            href="https://github.com/fernandes-vinicius?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <TextLink>Veja outros projetos</TextLink>
          </a>
        </div>
      </Container>
    </section>
  )
}
