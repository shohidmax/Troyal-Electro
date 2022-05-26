import React from 'react';
import logo from './logo.png';

const About = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4 p-3  m-3 border border-primary'>
                    <img className=" w-25 img-fluid rounded" src={logo} alt="" />
                    <h1>Troyal Electro </h1>
                    <h3>Best Iot  Parts making Company</h3>
                    
                </div>
                <div className='col-md-4'>

                </div>
            </div>
           
        </div>
    );
};

export default About;