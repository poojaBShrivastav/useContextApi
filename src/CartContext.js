import React, {  useState } from 'react';

export const CartContext =React.createContext();

export const ContextProvider = ({children}) => {

    let[cart,setcart] = useState([])
    let[total,settotal] = useState(0)

//    let addtocart = () =>{
//         // console.log("hello")
//         // setcart((prevCart) => {
           
//         //     let existingItemIndex = prevCart.findIndex((item) => item.id === shoe.id);
//         //     console.log(existingItemIndex)
//         //     if (existingItemIndex !== -1) {
//         //       // If the item is already in the cart, increase its quantity
//         //       let updatedCart = [...prevCart];
             
//         //       updatedCart[existingItemIndex].Qty += 1 ;
//         //       return updatedCart;
//         //     } else {
//         //       // If the item is not in the cart, add it with quantity 1
//         //       return  [...prevCart, {...shoe, Qty: 1 }];
//         //     }
//         //   });      
       
//     }

    return(
        <CartContext.Provider value={{cart,setcart,total,settotal}}>
            {children}
        </CartContext.Provider>
    )
    
}
