import React from 'react';
import Reviews from '../../Dashboard/Reviews/Reviews';
import Banner from '../Banner/Banner';
import ProductBanner from '../ProductBanner/ProductBanner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProductBanner></ProductBanner>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;