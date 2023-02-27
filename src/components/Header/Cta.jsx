import React from 'react'
import CV from '../../assets/cv.pdf'

function Cta() {
  return (
      <div className='cta'>
          {/* to be able to download the cv, we neec to add the download attribute within the anchor tag*/}
          <a href={CV} download className='btn'>Download CV</a>

          {/* giving this the classname of btn btn-primary changes the properties within btn-primary only */}
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta