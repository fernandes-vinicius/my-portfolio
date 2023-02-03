import { getProjects } from '@/services/get-projects'
import { getSkills } from '@/services/get-skills'

import { Hero } from '@/app/components/sections/Hero'
import { Contact } from '@/app/components/sections/Contact'
import { Portfolio } from '@/app/components/sections/Portfolio'
import { Skills } from '@/app/components/sections/Skills'

export default async function Home() {
  const projectsData = getProjects()
  const skillsData = getSkills()

  const [projects, skills] = await Promise.all([projectsData, skillsData])

  return (
    <main>
      <Hero />
      <Skills skills={skills} />
      <Portfolio projects={projects} />
      <Contact />
    </main>
  )
}
