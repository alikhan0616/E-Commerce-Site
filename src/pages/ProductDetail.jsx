import React from 'react';
import TopHeader from '../components/Header/TopHeader';
import Footer from '../components/Footer';
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import Button from '../components/common/Button';
import PageTemplate from '../components/common/PageTemplate';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import QtyCounter from '../components/common/QtyCounter';

const ProductDetail = () => {
    return ( <PageTemplate>

        
        <Container className="my-[30px]">
            <Row className="justify-between">
                <Row className="w-[47%]">
                    <img className='w-full object-cover h-[80vh]' src="https://images.unsplash.com/photo-1602832339346-f7501f06e09a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                </Row>
                <Row className="flex-col w-[47%]">
                    <h1 className='text-[30px] text-slate-800 font-semibold mb-[20px]'>Clothing | Demo Product</h1>
                    <Row className="gap-[40px]">
                        <p className='text-[1.05rem] text-slate-700 w-[15%] mb-[8px]'>Price :</p>
                        <p className='text-[1.05rem] text-slate-700'>$20</p>
                    </Row>
                    <Row className="gap-[40px]">
                        <p className='text-[1.05rem] text-slate-700 w-[15%] mb-[8px]'>Rating :</p>
                        <p className='text-[1.05rem] text-slate-700'>2/5</p>
                    </Row>
                    <Row className="gap-[40px]">
                        <p className='text-[1.05rem] text-slate-700 w-[15%] mb-[10px]'>Category :</p>
                        <p className='text-[1.05rem] text-slate-700'>Clothing</p>
                    </Row>
                    <Row className="gap-[40px]">
                        <p className='text-[1.05rem] text-slate-700 w-[15%] whitespace-nowrap'>Description :</p>
                        <p className='text-[1.05rem] text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cupiditate perferendis sequi ab et, amet possimus eos assumenda recusandae ullam, nemo expedita, illum quasi! At officiis vitae nam accusamus error!
                        </p>
                    </Row>
                    <div className='flex mt-[40px]'>
                        <QtyCounter />
                    </div>
                    <Link to="/cart" >
                    <Button className='mt-[20px] h-[38px] w-[125px]' title="Add to Cart" />
                    </Link>
                </Row>
            </Row>
        </Container>
        </PageTemplate>
     );
}
 
export default ProductDetail;