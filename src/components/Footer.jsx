import React from 'react';
import Container from './common/Container';
import Row from './common/Row';


const Footer = () => {
    return ( <Container className="bg-black h-[52px] py-[14px]">
        <Row className="text-[#E0E0E0] justify-between items-center h-full">
            <p>&#169; 2025 Khazana.com Inc.</p>
            <img src="../../imgs/cards.png" alt="cards" className='w-[283px]' />
            <p>Scroll to Top</p>
        </Row>
    </Container> );
}
 
export default Footer;