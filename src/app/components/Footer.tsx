import { Container } from '@/app/components/Container'
import { Logo } from '@/app/components/Logo'

export function Footer() {
  return (
    <footer>
      <Container
        className="flex flex-col lg:flex-row items-center justify-between
        py-5"
      >
        <Logo />

        <div
          className="flex flex-col items-center lg:items-end gap-1 mt-5 
          lg:mt-0"
        >
          <span className="text-gray-500 text-xs">
            © Projetado e construído por Vinícius Fernandes
          </span>
          <a
            className="text-gray-900 text-xs font-semibold"
            href="https://github.com/fernandes-vinicius/my-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Código fonte- Github
          </a>
        </div>
      </Container>
    </footer>
  )
}
