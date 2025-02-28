import React, { useContext } from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import CartItem from '../components/Cart/CartItem';
import { CartContext } from '../ContextAPI';

const Cart = () => {
     const {cartItems} = useContext(CartContext)
    return ( <PageTemplate>
        <Container className="my-[40px]">
            <Row className="mb-[30px] justify-center">
                <h6 className='text-[26px] text-slate-700 font-semibold'>Cart Details</h6>
            </Row>
            <Row className="flex-col">
                <Row className="h-[40px] w-full bg-gray-600 px-[20px] items-center">
                    <h6 className='text-white text-[18px] font-medium w-[20%]'>Image</h6>
                    <h6 className='text-white text-[18px] font-medium w-[20%]'>Title</h6>
                    <h6 className='text-white text-[18px] font-medium w-[20%]'>Price</h6>
                    <h6 className='text-white text-[18px] font-medium w-[20%] text-center'>Qty</h6>
                    <h6 className='text-white text-[18px] font-medium w-[20%] text-center'>Total</h6> 
                </Row>
                { cartItems.map(item => <CartItem data = {item} key = {item._id}/> )}
            </Row>
        </Container>
    </PageTemplate> );
}
 
export default Cart;