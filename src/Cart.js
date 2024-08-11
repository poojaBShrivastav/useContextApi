import React, { useContext } from 'react'
import {CartContext} from "./CartContext"

function Cart() {
    const {cart,setcart,total,settotal} = useContext(CartContext)

    function increaseQty(id){
        setcart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ));
    }

    function decreaseQty(id){
        setcart(cart.map(item =>
            item.id === id  ? { ...item, quantity: item.quantity - 1 } : item
          ) .filter(item => item.quantity > 0));
    }

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    settotal(totalAmount)
  return (  
    <>
    <h1>Cart</h1>
      {
        <table width="100%">
            <tbody>
                {
                    cart && cart.map((shoes)=>{
                        return(
                            <tr>
                                <th>
                                    <img src={shoes.image} height="50px" width="50px"/>
                                </th>
                                <th>{shoes.name}</th>
                                <th>{shoes.price}</th>
                                <th>
                                    <button onClick={()=>{increaseQty(shoes.id)}}>+</button>
                                        {shoes.quantity}
                                    <button onClick={()=>{decreaseQty(shoes.id)}}>-</button>
                                </th>
                            </tr>       
                        )
                    })
                }
            </tbody>
        </table>
      } 
      <h3>Total : {total}</h3>
      
    </>
  )
}

export default Cart
