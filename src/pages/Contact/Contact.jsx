import React from 'react'
import Contactus from '../../assets/images/contactus.png'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__content'>
        <div className='contact__content-main'>
          <h1 className='page__header'>Conatct US</h1>
          <form action="POST" className='contact__form'>
            <label htmlFor="text">Name</label>
            <input type="text" name="" id="" />
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="comments">Comments</label>
            <textarea name="comments" id="" cols="30" rows="20"></textarea>
            <button>Submit</button>
          </form>
        </div>
        <div className='contact__content-img'>
          <img src={Contactus} alt="contact" />
        </div>
      </div>
    </div>
  )
}

export default Contact