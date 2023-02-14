import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import Topnav from '../../components/topnav/TopNav'


const about = () => {
  return (
    <div className='home'>
      <div className="home__content">
        <Topnav />
        <div className="home__content-main">
          <h1>Team Ace</h1>
        </div>
        <p className='home__content-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, natus molestias modi voluptatibus aspernatur eum nostrum commodi! Iste amet ex vero dignissimos enim dolores provident praesentium eius, veniam reiciendis est.</p>
        <div className='home__content-main'>
          <p>Any Query ? </p>
          <Link to='/contact'> Contact Us </Link>
        </div>
      </div>
    </div>
  )
}

export default about