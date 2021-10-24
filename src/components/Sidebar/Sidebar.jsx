import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css'
import { Link } from 'react-router-dom'

export const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <div className={clsx('menu', { open: isOpen })}>
      <div className={'menu_content'}>
        <nav className="sidebar">
          <Link to="/Authorization">
            <div className={'nav_item'}>Authorization</div>
          </Link>

          <Link to="/Login">
            <div className={'nav_item'}>Login</div>
          </Link>

          <Link to="/Change">
            <div className={'nav_item'}>Change password</div>
          </Link>
        </nav>
      </div>

      <FontAwesomeIcon
        icon={isOpen ? faTimes : faBars}
        className={'menu_toggle'}
        onClick={onToggle}
      />
    </div>
  )
}
