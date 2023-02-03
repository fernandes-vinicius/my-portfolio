import { Container } from '@/app/components/Container'
import { Button } from '@/app/components/Button'
import { TextLink } from '@/app/components/TextLink'

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-blue-50 flex place-items-center lg:h-screen py-20"
    >
      <Container className="flex flex-col justify-center gap-5">
        <span className="text-indigo-900">Olá, meu nome é</span>

        <h2
          className="text-indigo-600 text-4xl md:text-6xl lg:text-7xl 
          xl:text-8xl font-bold"
        >
          Vinícius Fernandes
        </h2>

        <h2
          className="text-indigo-900 text-4xl md:text-6xl lg:text-7xl 
          xl:text-8xl font-bold"
        >
          Eu transformo ideias em negócios.
        </h2>

        <p className="text-base lg:text-lg">
          Eu sou um desenvolvedor de software hábil na resolução de problemas e
          especializado na construção <br className="hidden lg:block" /> (e
          ocasionalmente projeção) de experiências digitais excepcionais.
        </p>

        <div className="flex items-center gap-5">
          <Button>Fale comigo</Button>
          <TextLink>Conheça meu trabalho</TextLink>
        </div>
      </Container>
    </section>
  )
}
