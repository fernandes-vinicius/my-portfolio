import type { ReactNode } from 'react'

interface TextLinkProps {
  children: ReactNode
}

export function TextLink({ children }: TextLinkProps) {
  return (
    <span
      className="text-indigo-600 hover:text-indigo-900 text-sm text-center w-fit
      font-medium underline underline-offset-8 decoration-2 cursor-pointer transition"
    >
      {children}
    </span>
  )
}
