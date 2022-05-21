import React from 'react'
import about from './about.css'
import Award from '../../img/certificate.jpg'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://picsum.photos/500/700" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quis suscipit minima veniam fugit.
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit corrupti rerum quo reprehenderit eum! Laboriosam repudiandae corporis corrupti nam quibusdam explicabo accusantium ad et hic, soluta deserunt iusto quia dolor tempora, libero incidunt. Ipsa voluptate illum error voluptas.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Design Awards 2021</h4>
                    <p className="a-award-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officia!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About