import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './toggle.css'
import { ThemeContext } from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext);
const handleClick = () => {
    theme.dispatch({type: 'TOGGLE_THEME'})
}
  return (
    <div className='t'>
        <FontAwesomeIcon color='#ffcc00' icon={solid('sun')} className="t-icon" />
        <FontAwesomeIcon color='#0099cc' icon={solid('moon')} className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}} ></div>
    </div>
  )
}

export default Toggle