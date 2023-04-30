import { Nunito } from 'next/font/google'

import ClientOnly from '@/app/components/ClientOnly'
import RegisterModal from '@/app/components/Modals/RegisterModal'
import Navbar from '@/app/components/navbar/Navbar'
import ToasterProvider from '@/app/providers/ToasterProvider'

import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
