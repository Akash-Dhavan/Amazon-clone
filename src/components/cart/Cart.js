import React from 'react'
import "./Cart.css"
function Cart() {
  return (
      <div className='Cart'>
          <div className="CartLeft">
              {
                  <img src="https://bit.ly/3VppGpu" alt="" className="CartAd"/>
              }
          </div>
          <div>
              <h1>Your Cart is Empty</h1>
          </div>
      
    </div>
  )
}

export default Cart
