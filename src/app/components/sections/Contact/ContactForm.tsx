'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import clsx from 'clsx'

import { TextInput } from '@/app/components/TextInput'
import { TextArea } from '@/app/components/TextArea'
import { Button } from '@/app/components/Button'

const contactSchema = z.object({
  name: z.string().min(3),
  phone: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(2).max(255),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitMsg, setSubmitMsg] = useState('')
  const [isSubmitError, setIsSubmitError] = useState(true)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  async function handleSendMessage(data: ContactFormData) {
    try {
      const url = `https://getform.io/f/9a507497-21ed-4b2e-a97a-bbf46f1f0d91`

      await axios.post(url, data)

      setIsSubmitError(false)
      setSubmitMsg(`
        Ótimo, recebi o seu email, muito obrigado por entrar em contato. 
        Te retorno o mais rápido o possível. Pode também tentar minhas redes 
        sociais se preferir.
      `)

      reset()
    } catch (error) {
      setIsSubmitError(true)
      setSubmitMsg(`
        Não foi possível enviar sua mensagem. Tente novamente mais tarde.
      `)
    }
  }

  const isNameError = !!errors.name?.message
  const isPhoneError = !!errors.phone?.message
  const isEmailError = !!errors.email?.message
  const isMessageError = !!errors.message?.message

  return (
    <form
      noValidate
      onSubmit={handleSubmit(handleSendMessage)}
      className="grid lg:grid-cols-2 gap-5 w-full xl:pl-20"
    >
      <span
        className={clsx('col-span-full text-indigo-600 text-sm text-center', {
          'text-red-500': isSubmitError,
        })}
      >
        {submitMsg}
      </span>

      <TextInput
        {...register('name')}
        placeholder="Nome"
        isInvalid={isNameError}
      />

      <TextInput
        {...register('phone')}
        placeholder="Celular (opcional)"
        isInvalid={isPhoneError}
      />

      <TextInput
        {...register('email')}
        type="email"
        placeholder="E-mail"
        className="col-span-full"
        isInvalid={isEmailError}
      />

      <TextArea
        {...register('message')}
        placeholder="Deixe uma breve mensagem..."
        className="col-span-full"
        isInvalid={isMessageError}
      />

      <Button
        className="w-fit"
        type="submit"
        disabled={!isValid}
        loading={isSubmitting}
      >
        Enviar mensagem
      </Button>
    </form>
  )
}
