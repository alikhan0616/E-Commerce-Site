import React,{useEffect , useState} from 'react';
import apiEndpoints from "../../api/endpoint"
import Row from '../common/Row';
import Container from '../common/Container';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PopularProducts = () => {
  
  const [products , setProducts] = useState([])

  const getData = async ()=> {
    try {
      const url = apiEndpoints.products();
      const response = await axios.get(url);
      setProducts(response.data.docs);
    } catch (error) {
      console.log("Error:" , error);
    }
  }
  

  useEffect(()=> {
    getData()
  } , [])

    return ( <Container>
        <Row className="justify-center my-[20px] uppercase">
          <h1 className="text-[30px] font-semibold text-[#27201e]">Popular Products</h1>
        </Row>
        <Row className= "gap-[26px]">
          <div className="h-[648px] w-[52px] relative"> 
          <p className="text-[36px] h-full w-[648px] font-normal text-black -rotate-90 absolute text-center -z-[1]">Explore new and popular styles</p>
          </div>
          <Link to={`/product/${products[0]?._id}`}>
          <img className="h-[648px] w-[648px] object-cover cursor-pointer" src={products[0]?.img} alt={products[0]?.title} />
          </Link>
          <Row className="w-1/2 flex-wrap gap-[26px]">
          { products.slice(1).map((item , idx) => (
          <Link to={ `/product/${item._id}`} key={item._id} className="w-[46%] h-[311px]">
            <img className="w-[312px] h-full object-cover cursor-pointer" src={item.img} alt={item.title} />
          </Link>
          ))
          }   
          </Row>
        </Row>
       </Container> );
}
 
export default PopularProducts;