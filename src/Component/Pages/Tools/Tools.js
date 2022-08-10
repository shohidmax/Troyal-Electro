import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import Toolses from './Toolses';

const Tools = () => {
    const [Product] = useProduct();
    const clicked = () =>{
        console.log('clicked');
    }
    return (
        <div className='container'>
            <h1 className='text-info m-2'>Our products </h1>
            <div className='row'>
                {
                    Product.map( tool =>  <Toolses
                        _id={tool._id}
                        key={tool._id}
                        minorder={tool.minorder}
                        model={tool.model}
                        Stock_Qty={tool.Stock_Qty}
                        RPU={tool.RPU}
                        long_discription={tool.long_discription}
                        img={tool.img}
                        name={tool.name}
                        clicked={clicked}
                        ></Toolses>
                    )
                }
                
                

            </div>
            
        </div>
    );
}


export default Tools;