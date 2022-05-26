import React from 'react';
import Bannar from '../Bannar/Bannar';
import Contact from '../Contact/Contact';
import Explore from '../Explore/Explore';
import Footer from '../Footer/Footer';
import Onlinepartners from '../Onlinepartners/Onlinepartners';
import Trustus from '../Trustus/Trustus';


const Home = () => {
    return (
        <div>
        <Bannar></Bannar>
        <Trustus></Trustus>
        <Onlinepartners></Onlinepartners>
        <Explore></Explore>
        <Contact></Contact>
        <Footer></Footer>
            
        </div>
    );
};

export default Home;