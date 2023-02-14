import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import { GrNotification } from 'react-icons/gr'

import { AiOutlineSearch } from 'react-icons/ai'


import Dropdown from '../dropdown/Dropdown'

import notifications from '../../assets/json data/notifications.json'

import logo from '../../assets/images/logo.jpg'

import user_menu from '../../assets/json data/usermenues.json'

const curr_user = {
    display_name: 'Team Ace',
    image: logo
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    return (
        <div>
            <div className='topnav'>
                <div className="topnav__search">
                    <input type="text" placeholder='Search here...' />
                    <i>{<AiOutlineSearch/>}</i>
                </div>
                <div className="topnav__right">
                    <div className="topnav__right-item">
                        {/* dropdown here */}
                        <Dropdown
                            customToggle={() => renderUserToggle(curr_user)}
                            contentData={user_menu}
                            renderItems={(item, index) => renderUserMenu(item, index)}
                        />
                    </div>
                    <div className="topnav__right-item">
                        <Dropdown
                            icon={<GrNotification/>}
                            badge='12'
                            contentData={notifications}
                            renderItems={(item, index) => renderNotificationItem(item, index)}
                            renderFooter={() => <Link to='/'>View All</Link>}
                        />
                        {/* dropdown here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topnav
