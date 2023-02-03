import { forwardRef, InputHTMLAttributes } from 'react'
import clsx from 'clsx'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { isInvalid, className, ...rest } = props

    return (
      <input
        ref={ref}
        {...rest}
        className={clsx(
          'bg-white text-gray-900 border border-gray-200 w-full h-12 px-4',
          'shadow-base text-base rounded-lg placeholder:text-gray-500',
          'focus:ring-1 focus:outline-none focus:ring-indigo-600',
          'disabled:opacity-40 disabled:cursor-not-allowed disabled:border-0',
          {
            'border-red-50 focus:ring-red-50': isInvalid,
          },
          className,
        )}
      />
    )
  },
)

TextInput.displayName = 'TextInput'
