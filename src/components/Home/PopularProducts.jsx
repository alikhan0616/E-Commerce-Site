import React,{useEffect , useState} from 'react';
import apiEndpoints from "../../api/endpoint"
import Row from '../common/Row';
import Container from '../common/Container';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PopularProducts = () => {
  

  const getData = async ()=> {
    try {
      const response = await axios.get(apiEndpoints.products())
      console.log(response)
    } catch (error) {
      console.log("Error:" , error)
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
          <Link to="/product-detail">
          <img className="h-[648px] w-[648px] object-cover cursor-pointer" src="https://images.unsplash.com/photo-1739652398594-b418fd631543?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="clothes" />
          </Link>
          <Row className="w-1/2 flex-wrap gap-[26px]">
          { [...new Array(4)].map((_ , idx) => (
          <Link to="/product-detail" key={idx} className="w-[46%] h-[311px]">
            <img className="w-[312px] h-full object-cover cursor-pointer" src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="products" />
          </Link>
          ))
          }   
          </Row>
        </Row>
       </Container> );
}
 
export default PopularProducts;