'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { CircleNotch } from 'phosphor-react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  loading?: boolean
  children: ReactNode
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    loading,
    disabled,
    className,
    children,
    ...rest
  } = props

  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={clsx(
        'relative w-auto h-12 p-4 overflow-hidden rounded-full cursor-pointer',
        'inline-flex items-center justify-center gap-2',
        'text-center text-sm font-semibold leading-none capitalize',
        'disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed',
        'transition',
        {
          'bg-amber-500 hover:bg-amber-600 text-white': variant === 'primary',
        },
        {
          'bg-transparent hover:bg-indigo-600/10 text-indigo-900':
            variant === 'ghost',
        },
        className,
      )}
    >
      {loading && (
        <CircleNotch size={20} weight="bold" className="animate-spin" />
      )}

      {children}
    </button>
  )
}
