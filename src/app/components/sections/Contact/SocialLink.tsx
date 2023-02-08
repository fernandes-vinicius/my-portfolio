import Image from 'next/image'

interface SocialLinkProps {
  href: string
  icon: string
}

export function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-white w-12 h-12 flex items-center justify-center
      rounded-full cursor-pointer shadow-base hover:scale-105"
    >
      <Image src={icon} width={20} height={20} alt="" />
    </a>
  )
}
