import React from 'react'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
     <footer className='mb-0 text-center'>
        <div className="d-flex align-item-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              Made with by <b>Sana Shaikh</b>
            </p>
            <a href="https://www.linkedin.com/in/sana-shaikh-8a4a89240" className='text-dark fs-4' target='_blank' rel='noreferrer'><i><LinkedIn/></i></a>
              <a href="https://github.com/sana17shaikh" className='text-dark fs-4' target='_blank' rel='noreferrer'><i><GitHub/></i></a>
          </div>
        </div>
    </footer> 
    </>
  )
}

export default Footer
