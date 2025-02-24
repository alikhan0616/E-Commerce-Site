import React from 'react';
import Row from "../common/Row.jsx"

const HeaderButton = ({title , icon}) => {
    return (
        <Row> 
        {icon}
         <p className="text-[#1e2832] hover:text-slate-400 ml-[2px] cursor-pointer text-[1.05rem]">
         {title}
         </p>
        </Row>
    )     
}

export default HeaderButton 