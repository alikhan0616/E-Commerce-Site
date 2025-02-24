import React from 'react';
import Row from '../common/Row';
import QtyCounter from '../common/QtyCounter';

const CartItem = () => {
    return ( <Row className="border-[1px] border-gray-400 rounded items-center w-full py-[10px] px-[20px] mb-[30px]">
        <Row className= "w-[20%]">
            <img className='w-2/3 h-[150px] object-cover rounded-[6px]' src="https://images.unsplash.com/photo-1602832339346-f7501f06e09a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
        </Row>
        <p className='w-[20%] text-[1rem] text-black font-medium'>Demo Product</p>
        <p className='w-[20%] text-[1rem] text-black font-medium'>$20</p>
        <Row className='w-[20%] justify-center'>
            <QtyCounter className='w-[32px] h-[32px]' />
        </Row>
        <p className='w-[20%] text-[1rem] text-black font-medium text-center'>$1020</p>
    </Row> );
}
 
export default CartItem;