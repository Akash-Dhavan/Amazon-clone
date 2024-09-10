import React from 'react'
import './AddProduct.css'
import { Link } from 'react-router-dom'
function AddProduct() {
  return (
    <div>
          <form className='mainContainer'>
              <div><Link to="/"><img src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-1869030-1583154.png?f=webp" alt="" className='logoImg' /></Link></div>
              <div className="productTitle">
                  <label>Product Title</label>
                 
              </div>
              <input type="text" className='AddTitle' placeholder='Add Title here'  />
              
      </form>
    </div>
  )
}

export default AddProduct
