import { ReactNode } from 'react'

interface SkillCardProps {
  children: ReactNode
}

export function SkillCard({ children }: SkillCardProps) {
  return (
    <div
      className="bg-white flex justify-center items-center relative w-20 h-20
      rounded-lg shadow-base cursor-help hover:scale-110 transition"
    >
      {children}
    </div>
  )
}
