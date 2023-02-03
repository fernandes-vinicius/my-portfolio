import React from 'react'
import { Josefin_Sans as JosefinSans } from '@next/font/google'

import { Footer } from '@/app/components/Footer'

import './globals.css'

const josefinSans = JosefinSans({
  variable: '--font-josefin-sans',
  display: 'optional',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${josefinSans.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className="bg-white text-gray-500 w-screen h-screen antialiased 
        overflow-x-hidden"
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
