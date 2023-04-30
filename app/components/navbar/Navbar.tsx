'use client'

import { User } from '@prisma/client'
import { FC } from 'react'

import Container from '../Container'

import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

interface NavbarProps {
  currentUser?: User | null
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <header className='fixed z-10 w-full bg-white shadow-sm'>
      <div className='border-b-[1px] py-4'>
        <Container>
          <nav className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </nav>
        </Container>
      </div>
    </header>
  )
}

export default Navbar
