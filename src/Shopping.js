import React from 'react'
import Shoes from "./Shoes"
import Cart from './Cart';
import {data} from "./ShoesData"
import { useContext } from 'react';
import {CartContext} from "./CartContext"
import {Link} from "react-router-dom"
function Shopping() {
  const {cart} = useContext(CartContext)

  return (
    <>
         <div className='row'>
              <div className='shoes'>
                    {
                      data.map(function(shoe){

                        return(
                          <Shoes data={shoe}/>
                        )
                      })
                    }
              </div>
              <div className='cart'>
                    <Cart/>
                     <Link to="/cart">
                              <button disabled={cart.length==0 ? true : false}  className='payment'>Proceed to Payment</button>
                      </Link> 
              </div>
          </div>  
    </>
  )
}

export default Shopping
