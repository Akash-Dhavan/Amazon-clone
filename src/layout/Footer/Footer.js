import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./Footer.css"


function Footer() {
    const Scto = () => {
        window.scrollTo(0, 0);
    }

  return (
      <div className='Footer'>
          <a onClick={Scto}>
          <div className='FooterBottomToTop'>
          <KeyboardArrowUpIcon />
              </div>
              </a>
          <div className='FooterVerRow'>
              <div className='FooterVerCol'>
                  <div className='FooterVerColHead'>Get To Know Us !</div>
                  <ul>
                      <li>About</li>
                      <li>Services</li>
                      <li>Amazon Careers</li>
                      <li>Gift Products</li>
                      
                  </ul>
              </div>
              
              <div className='FooterVerCol'>
                  <div className='FooterVerColHead'>Connect us !</div>
                  <ul>
                      <li>Meta</li>
                      <li>Instagram</li>
                      <li>Tweeter</li>
                      <li>GitHub</li>
                      
                  </ul>
              </div>

              <div className='FooterVerCol'>
                  <div className='FooterVerColHead'>Make Money !</div>
                  <ul>
                      <li>Amazon Pay</li>
                      <li>Become An Affilate</li>
                      <li>Sell On Amazon</li>
                     <li>Clone Project</li>
                      
                  </ul>
              </div>
          </div>
          <div className='FooterLast'>
              <span className='FooterMess'>Amazon Clone &copy Akash Dhavan</span>
          </div>
    </div>
  )
}

export default Footer
