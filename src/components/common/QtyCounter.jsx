import React, { useContext, useState } from 'react';
import Row from './Row';
import Button from './Button';
import { CartContext } from '../../ContextAPI';

const QtyCounter = ({data}) => {
    const {cartItems , handleAdd , handleSub} = useContext(CartContext)
    const cartItem = cartItems.find(item => item._id === data?._id);
    return ( <Row className="gap-[20px] items-center">
        <Button onClick = {()=> handleSub(data)} className={"w-[38px] h-[38px]"}  title = "-" />
        <p className='text-[1rem] font-semibold text-center w-[15px]'>{cartItem?.qty || 0 }</p>
        <Button onClick = {()=> handleAdd(data)}className={ "w-[38px] h-[38px]"} title = "+" />
        </Row> );
}
 
export default QtyCounter;