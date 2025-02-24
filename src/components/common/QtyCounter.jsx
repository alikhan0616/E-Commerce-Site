import React from 'react';
import Row from './Row';
import Button from './Button';

const QtyCounter = ({className = "w-[38px] h-[38px]"}) => {
    return ( <Row className="gap-[20px] items-center">
        <Button className={`${className}`}  title = "+" />
        <p className='text-[1rem] font-semibold text-center'>0</p>
        <Button className={`${className}`} title = "-" />
        </Row> );
}
 
export default QtyCounter;