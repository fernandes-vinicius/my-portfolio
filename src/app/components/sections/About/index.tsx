import Image from 'next/image'

import { Button } from '@/app/components/Button'
import { Container } from '@/app/components/Container'
import { TextLink } from '@/app/components/TextLink'

export function About() {
  return (
    <section id="about">
      <Container className="grid lg:grid-cols-2 items-center gap-12">
        <div className="relative w-full lg:h-full flex justify-center items-center">
          <Image
            className="absolute"
            src="/assets/blob-background.svg"
            sizes="100%"
            alt=""
            fill
          />

          <div className="h-full">
            <div
              className="relative flex h-full w-full items-center justify-center
              bg-white p-5 rounded-2xl shadow-base -rotate-6"
            >
              <Image
                className="object-cover rounded-2xl"
                src="/assets/me.png"
                width={344}
                height={312}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-indigo-600">Sobre mim</span>

          <h2 className="text-indigo-900">
            Precisa de Serviços de Desenvolvimento?{' '}
            <br className="hidden lg:block" /> Eu posso te ajudar!
          </h2>

          <p>
            Sou um desenvolvedor apaixonado por criar aplicativos com
            funcionalidades intuitivas. Gosto do processo de transformar ideias
            em realidade usando soluções criativas. Estou sempre curioso para
            aprender novas habilidades, ferramentas e conceitos.
          </p>

          <div className="flex items-center gap-5">
            <Button>Fale comigo</Button>
            <TextLink>Veja minhas skills</TextLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
