import React, { useState } from 'react'
import clsx from 'clsx'

import './Layout.css'
import { Sidebar } from '../components/Sidebar/Sidebar'

export const Layout = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpenMenu((prevState) => !prevState)
  }

  return (
    <div className={clsx('container', { isOpenMenu: isOpenMenu })}>
      <Sidebar isOpen={isOpenMenu} onToggle={toggleMenu} />

      <main>{children}</main>
    </div>
  )
}
