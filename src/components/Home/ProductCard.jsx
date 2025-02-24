import React from 'react';
import Row from '../common/Row';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProductCard = () => {
    return ( <Link to="/product-detail" className='w-full shadow p-[5px] cursor-pointer'>
        <img 
        src="https://images.unsplash.com/photo-1738363436173-0b49cd20dea8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="blackGuy"
        className='w-full h-[400px] object-cover'/>
        <Row className="px-[10px]">
        <h6 className='text-black text-[16px] font-semibold mt-[18px]'>Demo Title</h6>  
        </Row>
        <Row className="justify-between mt-[16px] px-[10px] mb-[10px]">
            <p className='text-[16px] text-[#00000080]'>Clothing</p>
            <p className='text-[16px] text-[#00000080] font-semibold'>$20</p>
        </Row>
    </Link>
     );
}
 
export default ProductCard;