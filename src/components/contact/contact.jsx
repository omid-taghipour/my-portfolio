import React from 'react'
import TextAnimation from '../text-animation/text-animation'
import './contact.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
    return (
        <div className='contact-form-container'>
            <TextAnimation tagName={'h1'} text={'Contact'} typingSpeed={100} classAtt={"title-text"} />
            <div className="social-media-container">
                <h2>You can get in touch with me through the following platforms</h2>
                <div className='social-media-items'>
                    <a href='https://cy.linkedin.com/in/omid-taghipour-77053a1b0' target='_blank' rel='noreferrer'>
                        <BsLinkedin className='social-media-icon' />
                        LinkedIn
                    </a>
                    <a href='https://github.com/omid-taghipour' target='_blank' rel='noreferrer'>
                        <BsGithub className='social-media-icon' />
                        GitHub
                    </a>
                    <a href='mailto:omid.taghipour1@gmail.com' target='_blank' rel='noreferrer'>
                        <SiGmail className='social-media-icon' />
                        Gmail
                    </a>
                </div>
            </div>
            <hr className='divider-line' />
            <form action="https://getform.io/f/d9de3f9a-1c79-46c2-b537-e13d37a10ae3" name='contact' className='contact-form' method='POST'>
                <h2>Or you can send me a message through the following form</h2>
                <input type="text" name="name" className="contact-name" placeholder='Your Name' required/>
                <input type="email" name="email" className="contact-email" placeholder='Your Email' required/>
                <textarea name="message" className="contact-message" rows="10" placeholder='Your message' required></textarea>
                <button type='submit'>Send the message!</button>
            </form>
        </div>
    )
}

export default Contact