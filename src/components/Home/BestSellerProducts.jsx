import React, { useEffect, useState } from 'react';
import Container from '../common/Container';
import Row from '../common/Row';
import ProductCard from './ProductCard';
import axios from 'axios';
import apiEndpoints from '../../api/endpoint';

const BestSellerProducts = () => {

    const [products , setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const getData = async ()=> {
        try {
            const urlCat = apiEndpoints.categories;
            const responseCat = await axios.get(urlCat);
          handleGetProduct();
          setCategories(responseCat.data);
        
        } catch (error) {
          console.log("Error:" , error);
        }
      }

      const handleGetProduct = async (cid) => {
        try {
            const urlProd = apiEndpoints.products(12 , cid);
            const responseProd = await axios.get(urlProd);
            setProducts(responseProd.data.docs);
        } catch (error) {
            console.log("Error:" , error);
        }
      }
      
    
      useEffect(()=> {
        getData()
      } , [])
    return ( <Container>
        <Row className="justify-center my-[20px] uppercase">
            <h1 className='w-full text-[30px] font-semibold text-[#27201e] text-center'>Best Seller Products</h1>
        </Row>
        
            <Row className="items-center">
                <p onClick={() => handleGetProduct()} className='text-[16px] font-bold text-black mr-[40px] cursor-pointer hover:text-[#757575] '>
                    All Products
                    </p>
                    {categories.map(item=> <p className=' font-[16px] text-[#00000080] mr-[40px] cursor-pointer hover:text-[#757575]' 
                    key={item._id}
                    onClick={()=> handleGetProduct(item._id)}>
                    {item.title}
                    </p> )}
            </Row>

            <Row className="flex-wrap gap-[1%] mt-[35px]">
            {products.map(item => <div className='w-[24%] mb-[20px]' key= {item._id}>
                <ProductCard data = {item} />
            </div> )}
            </Row>
    </Container> );
}
 
export default BestSellerProducts;