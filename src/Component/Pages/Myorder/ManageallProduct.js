import React from 'react';
import useProduct from '../../../Hooks/useProduct';

const ManageallProduct = () => {
    const [Product, setProduct] = useProduct();

    return (
        <div>
            <h1>product : {Product.length}</h1>
            
        </div>
    );
};

export default ManageallProduct;