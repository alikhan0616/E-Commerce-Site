import {BrowserRouter as Router , Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
export default function App(){
  
  return(
    <Router>
      <Route path='/' component={Home} exact/>
      <Route path='/product-detail' component={ProductDetail} exact/>
      <Route path='/cart' component={Cart} exact />
    </Router>
  )
}