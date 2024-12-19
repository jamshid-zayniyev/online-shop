import React from 'react'

// footers
import FooterDefault from './footerDefault'
import FooterMobile from './footerMobile'

const Footer = () => {
  return (
    <div className='mt-10'>
        <FooterDefault/>
        <FooterMobile/>
    </div>
  )
}

export default Footer