import { forwardRef, TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { rows = 4, className, isInvalid, ...rest } = props

    return (
      <textarea
        ref={ref}
        {...rest}
        rows={rows}
        className={clsx(
          'bg-white text-gray-900 border border-gray-200 w-full min-h-[3rem]',
          'py-2 px-4 shadow-base text-base rounded-lg placeholder:text-gray-500',
          'inline-block overflow-auto',
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

TextArea.displayName = 'TextArea'
