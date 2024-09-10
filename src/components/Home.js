import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from './product/Product';
function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const moveCarousal = () => {
      const Slides = document.querySelectorAll(".homeImg");
      if (Slides) {
        Slides.forEach((slide, index) => {
          slide.style.visibility = index === activeSlide ? 'visible' : 'hidden';
          // Optional: Add additional styling for active slide (e.g., opacity)
        });

        if (activeSlide >= Slides.length - 1) {
          setActiveSlide(0);
        } else {
          setActiveSlide(activeSlide + 1);
        }
        setTimeout(() => moveCarousal(), 5000);
      }
      
    };

    moveCarousal();
  }, []);
  

  return (
    <>
      <div className="home">
        <div className='home-container'>
          <div className='homeSliderContainer'>
            <div className='homeSlide'>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/MayART24/HERO/MayART24_GW_PC_Hero_NTA1_Event_2x._CB557876662_.jpg" alt="image-ad" className='homeImg' />
            </div>
            <div className='homeSlide'>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/mayart24/atf/ROE/PC/87._CB557910289_.jpg" alt="image-ad" className='homeImg' />
            </div>
            <div className='homeSlide'>
              <img src="https://m.media-amazon.com/images/I/91UsQXwq72L._SX3000_.jpg" alt="image-ad" className='homeImg' />
            </div>
          </div>
        </div>
        <Product/>
      </div>
    </>
  );
}

export default Home;
