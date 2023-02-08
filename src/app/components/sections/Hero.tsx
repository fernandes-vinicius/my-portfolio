import { Button } from '@/app/components/Button'
import { Container } from '@/app/components/Container'
import { TextLink } from '@/app/components/TextLink'

export function Hero() {
  return (
    <section id="hero" className="bg-blue-50 py-12 lg:py-52">
      <Container className="flex flex-col gap-5">
        <span className="text-indigo-900">Olá, meu nome é</span>

        <h1 className="text-indigo-600">Vinícius Fernandes</h1>

        <h1 className="text-indigo-900">Eu transformo ideias em negócios.</h1>

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
