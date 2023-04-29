'use client'

import { FC } from 'react'

import Container from '../Container'

import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

const Navbar: FC = () => {
  return (
    <header className='fixed z-10 w-full bg-white shadow-sm'>
      <div className='border-b-[1px] py-4'>
        <Container>
          <nav className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu />
          </nav>
        </Container>
      </div>
    </header>
  )
}

export default Navbar
