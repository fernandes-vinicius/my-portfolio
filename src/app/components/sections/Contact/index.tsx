import { Container } from '@/app/components/Container'

import { ContactForm } from './ContactForm'
import { SocialLink } from './SocialLink'

const PHONE_NUMBER = `+55 (84) 9 9995 4300`
const EMAIL_ADDRESS = `vinicius.dev.contact@gmail.com`
const SOCIAL_LINKS = [
  {
    href: 'https://github.com/fernandes-vinicius',
    title: 'Github',
    icon: '/assets/github.svg',
  },
  {
    href: 'https://www.linkedin.com/in/vinicius-fernandes-3a6686139',
    title: 'LinkedIn',
    icon: '/assets/linkedin.svg',
  },
  {
    href: 'https://instagram.com/fernandesv_?igshid=ZDdkNTZiNTM=',
    title: 'Instagram',
    icon: '/assets/instagram.svg',
  },
  {
    href: 'https://whatsa.me/5584999954300',
    title: 'WhatsApp',
    icon: '/assets/whatsapp.svg',
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-blue-50">
      <Container className="grid xl:grid-cols-2 xl:items-center gap-12">
        <div className="flex flex-col gap-5 w-full">
          <span className="text-indigo-600">Entre em contato</span>

          <h2 className="text-indigo-900">
            Gostou do meu trabalho? <br className="hidden lg:block" /> Por
            favor, deixe uma mensagem
          </h2>

          <p>
            Entre em contato e me diga como posso ajudar. Preencha o formulário
            e <br className="hidden lg:block" /> entrarei em contato o mais
            breve possível.
          </p>

          <div className="flex flex-col gap-1">
            <strong className="text-indigo-900 text-sm">Telefone</strong>
            <span className="text-sm">{PHONE_NUMBER}</span>
          </div>

          <div className="flex flex-col gap-1">
            <strong className="text-indigo-900 text-sm">E-mail</strong>
            <span className="text-sm">{EMAIL_ADDRESS}</span>
          </div>

          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => {
              return (
                <SocialLink key={link.href} href={link.href} icon={link.icon} />
              )
            })}
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  )
}
