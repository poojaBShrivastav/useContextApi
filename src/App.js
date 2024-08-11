
import './App.css';
import Allcartitem from "./Allcartitems"
import Header from "./Header"
import Shoes from './Shoes';
import Shopping from './Shopping';
import  {ContextProvider} from "./CartContext"
import {Routes,Route } from 'react-router-dom';
function App() {
 
  return (
   <ContextProvider>
    <div className="App">
          <Header/>
         <Routes>
              <Route path="/" element={<Shopping/>}></Route>
              <Route path="/cart" element={<Allcartitem/>}></Route>
         </Routes>
    </div>
     </ContextProvider>
  );
}

export default App;
