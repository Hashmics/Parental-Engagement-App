import React from 'react'
import './home.css'
import CardComponent from '../../components/cardcomponent/CardComponent'
import TopNav from '../../components/topnav/TopNav'
import RightSidebar from '../../components/rightsidebar/rightsidebar'

const home = () => {
  return (
    <div className='home'>
      <div className="home__content">
        <TopNav/>
        <h1 className='page__header'>Hey Buddy</h1>
        <div className="home__content-main">
          <CardComponent /> 
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default home

