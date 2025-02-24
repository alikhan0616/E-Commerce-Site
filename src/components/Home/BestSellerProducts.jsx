import React from 'react';
import Container from '../common/Container';
import Row from '../common/Row';
import ProductCard from './ProductCard';

const BestSellerProducts = () => {
    return ( <Container>
        <Row className="justify-center my-[20px] uppercase">
            <h1 className='w-full text-[30px] font-semibold text-[#27201e] text-center'>Best Seller Products</h1>
        </Row>
        
            <Row className="items-center">
                <p className='text-[16px] font-bold text-black mr-[40px] cursor-pointer hover:text-[#757575] '>
                    All Products
                    </p>
                    <p className=' font-[16px] text-[#00000080] mr-[40px] cursor-pointer hover:text-[#757575]'>
                    Clothes
                    </p>
                    <p className=' font-[16px] text-[#00000080] mr-[40px] cursor-pointer hover:text-[#757575]'>
                    Shoes
                    </p>
                    <p className=' font-[16px] text-[#00000080] mr-[40px] cursor-pointer hover:text-[#757575]'>
                    Bags
                    </p>
                    <p className=' font-[16px] text-[#00000080] mr-[40px] cursor-pointer hover:text-[#757575]'>
                    Jewlery
                    </p>
            </Row>

            <Row className="flex-wrap gap-[1%] mt-[35px]">
            <div className='w-[24%] mb-[20px]'>
                <ProductCard />
            </div>
            <div className='w-[24%] mb-[20px]'>
                <ProductCard />
            </div>
            <div className='w-[24%] mb-[20px]'>
                <ProductCard />
            </div>
            <div className='w-[24%] mb-[20px]'>
                <ProductCard />
            </div>
            <div className='w-[24%] mb-[20px]'>
                <ProductCard />
            </div>
            <div className='w-[24%] mb-[20px]'>
                <ProductCard />
            </div>
            <div className='w-[24%] mb-[20px]'>
                <ProductCard />
            </div>
            </Row>
    </Container> );
}
 
export default BestSellerProducts;