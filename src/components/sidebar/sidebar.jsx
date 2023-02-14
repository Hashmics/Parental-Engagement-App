import React from 'react'
import sidebar_items from '../../assets/json data/routesdata.json'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.jpg'
import './sidebar.css'

const SidebarItem = props => {
  const active = props.active ? 'active' : ''
  return (
    <div className="sidebar__items">
      <div className={`sidebar__item-inner ${active}`}>
        <span>
          {props.title}
        </span>
      </div>
    </div>
  )
}

const Sidebar = props => {
  
  return (
    <div className='sidebar' >
      <div className="sidebar__logo" >
        <h1>Team Ace</h1>
        <img src={Logo} alt="company logo"/>
      </div>
      {
        sidebar_items.map((item, index) => (
          <Link to={item.route} key={index}>
            <SidebarItem
              title={item.display_name}
              // active={index === activeItem}
            />
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar