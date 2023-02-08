import { getProjects } from '@/services/get-projects'
import { getSkills } from '@/services/get-skills'

import { Hero } from '@/app/components/sections/Hero'
import { About } from '@/app/components/sections/About'
import { Skills } from '@/app/components/sections/Skills'
import { Portfolio } from '@/app/components/sections/Portfolio'
import { Contact } from '@/app/components/sections/Contact'

export default async function Home() {
  const projectsData = getProjects()
  const skillsData = getSkills()

  const [projects, skills] = await Promise.all([projectsData, skillsData])

  return (
    <main>
      <Hero />
      <About />
      <Skills skills={skills} />
      <Portfolio projects={projects} />
      <Contact />
    </main>
  )
}
