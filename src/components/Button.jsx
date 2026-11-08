import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../css/Button.css'

const Button = ({ className, hRef, textContent, downloadLink, icon, target }) => {

  return (
    <a
        className={`custom-btn ${className || ''}`}
        href={hRef}
        download={downloadLink || undefined}
        target={target || undefined}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
        {textContent}
        {icon && <FontAwesomeIcon icon={icon} />}
    </a>
  )
}

export default Button
