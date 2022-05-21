import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import "./intro.css"

const intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Fasika Dagnachew</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Photographer</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Content Creator</div>
                    </div>
                </div>
                <p className="i-desc">
                    I design and develop services for customers of all sizes. specializing in creating stylish modern websites, web applications, and online stores.
                </p>
            </div>
            <FontAwesomeIcon className='i-scroll' fontSize={50} icon={solid('sort')} />
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img className='i-img' src="https://www.transparentpng.com/thumb/man/psW26l-download-man-png-image-png-image-freepngimg.png" alt="smiling man images transparent download @transparentpng.com" />
        </div>
    </div>
  )
}

export default intro