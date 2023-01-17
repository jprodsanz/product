import React from 'react'
import MainScreen from '../../components/MainScreen';
import { OneProduct } from '../../components/OneProduct';

// import { Button, Card, Accordion,Badge } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import notes, { } from "../../data/notes";

const ProductDisplay = () => {
    return (
        <MainScreen title='Welcome Back...'>
            <div className="App">
                <OneProduct />
            </div>
    </MainScreen>
        
);
};

export default ProductDisplay;