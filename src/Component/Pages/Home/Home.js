import React from 'react';
import Bannar from '../Bannar/Bannar';
import Contact from '../Contact/Contact';
import Explore from '../Explore/Explore';
import Footer from '../Footer/Footer';
import Onlinepartners from '../Onlinepartners/Onlinepartners';
import Review from '../Review/Review';
import Tools from '../Tools/Tools';

import Toolses from '../Tools/Toolses';
import Trustus from '../Trustus/Trustus';


const Home = () => {
    return (
        <div>
        <Bannar></Bannar>
        <Tools></Tools>
        {/* <Toolses></Toolses> */}
        <Trustus></Trustus>
        <Onlinepartners></Onlinepartners>
        <Explore></Explore>
        <Contact></Contact>
        <Review></Review>
        <Footer></Footer>
            
        </div>
    );
};

export default Home;