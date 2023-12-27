import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

import Sidebar from '@/components/Sidebar'
import ModalProvider from '@/providers/ModalProvider'
import Player from '@/components/Player'
import { SessionProvider } from 'next-auth/react'

const font = Figtree({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Coma te llama',
  description: 'new school music-app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <ModalProvider/>
              <Sidebar>
                {children}
              </Sidebar>
            <Player/>
      </body>
    </html>
  )
}
