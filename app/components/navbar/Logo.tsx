'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

const Logo: FC = () => {
  const router = useRouter()

  return (
    <Image
      alt='Logo'
      className='hidden cursor-pointer md:block'
      height='100'
      width='100'
      src='/images/logo.png'
    />
  )
}

export default Logo
