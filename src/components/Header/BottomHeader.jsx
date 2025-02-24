import React from 'react';
import Row from "../common/Row.jsx"


const BottomHeader = () => {
    const menu = [
        "Jewlery & Accessories",
        "Clothing & Shoes",
        "Home & Living",
        "Wedding & Party",
        "Toys & Entertainment",
        "Art & Collectibles",
        "Craft Supplies & Tools"
    ]
    return ( 
        <div className="w-full h-[60px] px-[10%] bg-[#7b838b0d]">
                <Row className="flex h-full items-center justify-between">
                    {menu.map(item => <p className="text-[16px] text-slate-800" key={item}>{item}</p>)}
                </Row>
            </div>
      );
}
 
export default BottomHeader;