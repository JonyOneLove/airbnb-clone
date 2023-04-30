import { Nunito } from 'next/font/google'

import ClientOnly from '@/app/components/ClientOnly'
import LoginModal from '@/app/components/Modals/LoginModal'
import RegisterModal from '@/app/components/Modals/RegisterModal'
import Navbar from '@/app/components/navbar/Navbar'
import ToasterProvider from '@/app/providers/ToasterProvider'

import getCurrentUser from './actions/getCurrentUser'
import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
