import type { ReactNode } from 'react'
import clsx from 'clsx'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={clsx('container mx-auto px-5 py-20', className)}>
      {children}
    </div>
  )
}
