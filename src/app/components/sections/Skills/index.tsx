import Image from 'next/image'

import { ISkill } from '@/services/get-skills'
import { Container } from '@/app/components/Container'

import { SkillCard } from './SkillCard'

interface SkillsProps {
  skills: ISkill[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="bg-blue-50">
      <Container className="grid xl:grid-cols-2 xl:items-center gap-12">
        <div className="flex flex-col gap-5">
          <span className="text-indigo-600">Minhas skills</span>

          <h4
            className="text-indigo-900 text-3xl md:text-4xl lg:text-5xl
            font-bold"
          >
            O que minhas habilidades com programação incluem?
          </h4>

          <p>
            Desenvolvo uma interface de usuário simples, intuitiva e responsiva
            que ajuda os <br className="hidden xl:block" /> usuários a
            economizarem tempo e esforço na realização de suas atividades com{' '}
            <br className="hidden xl:block" /> o auxílio dessas tecnologias e
            ferramentas.
          </p>
        </div>

        <div
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8
          lg:grid-cols-10 xl:grid-cols-7 gap-5"
        >
          {skills.map((skill) => {
            return (
              <SkillCard key={skill.id}>
                <Image src={skill.image_path} width={40} height={40} alt="" />
              </SkillCard>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
