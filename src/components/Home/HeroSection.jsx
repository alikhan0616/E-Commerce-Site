import React from 'react';
import Row from '../common/Row';
import Button from '../common/Button';
const HeroSection = () => {
    return (  <div className="w-full px-[10%] py-[96px] ">
        <Row className="w-full items-center justify-between">
          <div className="w-[46%]">
            <h1 className="text-[76px] text-slate-950 font-light">
              Collections
            </h1>
            <p className="text-[26px] text-black mt-[52px] font-light">
              You can explore and shop many products and different collections from various brands here.
            </p>
            <Button />
          </div>
          <div className="w-[46%]">
            <div className="w-[424px] h-[542px] relative">
            <img className="animate-wobble w-full h-full rounded-tl-[160px] rounded-br-[160px]"
             src="https://images.unsplash.com/photo-1739652398716-bea18b48bbee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
             <div className="animate-wobble absolute w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000060] top-[18px] left-[18px] -z-[1]"/>
             </div>
          </div>
        </Row>
        </div> );
}
 
export default HeroSection;