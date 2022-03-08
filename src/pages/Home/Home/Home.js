import React from 'react';
import Banner from '../Banner/Banner';
import ProductBanner from '../ProductBanner/ProductBanner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProductBanner></ProductBanner>

        </div>
    );
};

export default Home;