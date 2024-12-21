import React from 'react'
import { Link } from 'react-router-dom'

const FooterNav = ({link, linkName}) => {
  return (
        <p className='footer-nav-items'>
            <Link to={link}>{linkName}</Link>
        </p>
  )
}

export default FooterNav
