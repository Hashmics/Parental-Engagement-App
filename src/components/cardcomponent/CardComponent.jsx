import React from 'react'
import './cardcomponent.css'
import Teacher from '../../assets/images/teacher.png'
import Parent from '../../assets/images/parent.png'
import { Link } from 'react-router-dom'



export default function CardComponent() {
    return (
        <div className='' >
            <div className='stat__cards'>
                <div className='card'>
                    <div className='card__info'>
                        <h1 className='card-title'> Total Number of Students</h1>
                        <div className="donut-ring">
                            <div className="ring red"></div>
                            <div className="ring blue"></div>
                            <div className="ring orange"></div>
                            <div className="ring green"></div>
                            <div className="cutout"></div>
                        </div>
                        <h4 className='numbers'>10000</h4>
                    </div>
                </div>
                <div className='card'>
                    <div className='card__info'>
                        <h1 className='card-title'> Total Number of Teachers</h1>
                        <div className="donut-ring">
                            <div className="ring red"></div>
                            <div className="ring blue"></div>
                            <div className="ring red"></div>
                            <div className="ring green"></div>
                            <div className="cutout"></div>
                        </div>
                        <h4 className='number'>200</h4>
                    </div>
                </div>
            </div>
            <div className='profile__cards'>
                <div className='card'>
                    <div className='card__info'>
                        <h1 className='card-title'>Parent Profiles</h1>
                        <Link to='/parentprofile'><img src={Parent} alt="parent" className='rounded' /></Link>
                    </div>
                </div>
                <div className='card'>
                    <div className='card__info'>
                        <h1 className='card-title'> Teacher Profiles</h1>
                        <Link to='/teacherprofile'><img src={Teacher} alt="Teacher" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
