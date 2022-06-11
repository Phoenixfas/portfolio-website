import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_7qzgs2r', 'template_07kztow', formRef.current, 'H3d4wkxOfYSB8wkZa')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <FontAwesomeIcon color='#008855' icon={solid("phone")} className="c-icon"/>
                        +251 93 416 6250
                    </div>
                    <div className="c-info-item">
                        <FontAwesomeIcon color='#0099aa' icon={solid("envelope")} className="c-icon"/>
                        fasika1515@gmail.com
                    </div>
                    <div className="c-info-item">
                        <FontAwesomeIcon color='#cc1100' icon={solid("map-location-dot")} className="c-icon"/>
                        Kirkos sub, Gotera Condominium B75/02 
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story? </b> Get in touch. Always availabe for freelancing if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                    <textarea style={{backgroundColor: darkMode && "#333"}} placeholder='Message' name="message" rows="5" />
                    <button>Submit</button>
                    {done && <p className="c-done">Your message has been sent. Thank you!</p>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact