import React, { useContext } from 'react'
import {CartContext} from "./CartContext"
import data from "./ShoesData"
function Shoes({data}) {

  const {cart,setcart} = useContext(CartContext)

  function addtocart(shoe){
    console.log(shoe);
    const existingItem = cart.find(item => item.id === shoe.id);
    if (existingItem) {
      setcart(cart.map(item =>
        item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setcart([...cart, { ...shoe, quantity: 1 }]);
    }
    
  }
 
  return (
    <div className='shoesCard'>
        <img src={data.image}  height="150px" width="150px"/>
        <p>{data.name}</p>
        <p>{data.price}</p>
        <button onClick={()=>{addtocart(data)}}>Add to cart</button>
    </div>
  )
}

export default Shoes
