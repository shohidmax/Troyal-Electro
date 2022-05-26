import React from 'react';

const Myprotfolio = () => {
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
            <div className='m-3'>
                <img src="https://i.ibb.co/brRsszS/119883450-2582251711995445-3103029751411193994-n.jpg" className="w-25" alt="..."/>
                <h2>Name : Sarwar Jahan</h2>
                <h2>Email : Shohidmax@gmail.com</h2>
                <h4 className='text-bold'>Address : 102/26 - Dhobra bazar , Shahabazpur, Kansat, Sibgong, ChapaiNawabgong, Rajshahi. </h4>
                <h4> Education : BBA Honors Development Of Marketing  At Rajshahi Collage</h4>
                <div>
                
                <div className="list-group m-2 p-4" >
                    <a href="#" className="list-group-item list-group-item-action">My skill on Web Development</a>

                    <a href="#" className="list-group-item list-group-item-action list-group-item-primary">Expert in  HTML</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">Expert in CSS</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-success">Expert in javaScript</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-danger">Expert in Bootstrap</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Expert in Taildwind</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-info">Expert in React Js</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-light">Expert in Mongo DB</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-dark">Expert in Node js</a>
                    </div>
                </div>
                <div>
                    <h3 className='m-2 '>My Recent Project</h3>
                    <a className='btn btn-primary me-1' href="https://assignment-10-shohidmax.web.app">Onshort</a>
                    <a className='btn btn-primary me-1' href="https://okmodel.n6.workers.dev">Movie Website</a>
                    <a className='btn btn-primary me-1' href="https://assaignment-11-fullstack.web.app">Inventer Website</a>
                    <a className='btn btn-primary me-1' href="https://my-first-siite.netlify.app">Community Center</a>
                </div>
                <h5 className='text-s mt-2'>My name is Sarwar Jahan. I'm a student of Marketing  BBA at Rajshahi College. My ambition is to Make a Complete Programmer and another hobby make myself a Businessman. My next Goal is TO Learn about python, Php, Laravel, And so on.</h5>
            </div>
            </div>
            <div className='col-md-3'></div>
            </div>
        </div>
    );
};

export default Myprotfolio;