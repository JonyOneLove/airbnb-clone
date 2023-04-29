'use client'

import { FC } from 'react'

interface MenuItemsProps {
  onClick: () => void
  label: string
}

const MenuItems: FC<MenuItemsProps> = ({
  onClick,
  label,
}) => {
  return (
    <div
      onClick={onClick}
      className='px-4 py-3 font-semibold transition hover:bg-neutral-100'
    >
      {label}
    </div>
  )
}

export default MenuItems
