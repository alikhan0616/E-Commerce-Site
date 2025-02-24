import React from 'react';
import TopHeader from '../components/Header/TopHeader';
import BottomHeader from '../components/Header/BottomHeader';
import HeroSection from '../components/Home/HeroSection';
import PopularProducts from '../components/Home/PopularProducts';
import BestSellerProducts from '../components/Home/BestSellerProducts';
import Footer from '../components/Footer';
import PageTemplate from '../components/common/PageTemplate';

const Home = () => {
    return ( <PageTemplate>
        <BottomHeader/>
       <HeroSection />
       <PopularProducts />
       <BestSellerProducts />

    </PageTemplate>
        
     
);
}
 
export default Home;