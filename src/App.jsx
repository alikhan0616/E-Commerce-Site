import {BrowserRouter as Router , Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import {CartContext} from './ContextAPI/index.js'
import { useState } from 'react'
export default function App(){
  const [cartItems , setCartItems] = useState([]);

  const handleAdd = (product) => {
    const prod = cartItems.find((item) => item._id === product._id)
    if(!prod){
     return setCartItems(prev => [...prev , {...product , qty : 1}])
    }
     const _items = cartItems.map(item => ({
      ...item,
      qty: product._id === item._id? item.qty + 1 : item.qty
    }))
    setCartItems(_items);
  }
  const handleSub = (product) => {
    if(product.qty > 1){
      const _items = cartItems.map(item => ({
       ...item,
       qty: product._id === item._id? item.qty - 1 : item.qty
     }))
     return setCartItems(_items);
   }
   const idx = cartItems.findIndex(item => item._id === product._id);
   const _cartItms = [...cartItems];
   _cartItms.splice(idx , 1);
   setCartItems(_cartItms);
    }

  return(
    <CartContext.Provider value = {{cartItems , handleAdd , handleSub}}>
    <Router>
      <Route path='/' component={Home} exact/>
      <Route path='/product/:id' component={ProductDetail} exact/>
      <Route path='/cart' component={Cart} exact />
    </Router>
    </CartContext.Provider>
  )
}