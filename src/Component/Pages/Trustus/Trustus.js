import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBoxesStacked, faFlag, faPeopleGroup, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Trustus = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-primary'>Million Buseness Trust US</h1>
                <div className='col-md-3'>
                    <div><h1><FontAwesomeIcon  className='text-teal-500' icon={faFlag}  /></h1>
                    <h2>67+</h2> 
                    <p>Countries</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div><h1><FontAwesomeIcon icon={faBoxesStacked} /></h1>

                    <h2>850+</h2> 
                    <p>Compleate Project</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div><h1><FontAwesomeIcon icon={faPeopleGroup} /></h1>
                    <h2>600+</h2> 
                    <p>Happy Clients</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div><h1><FontAwesomeIcon icon={faThumbsUp} /></h1>
                    <h2>520+</h2> 
                    <p>Feedbacks</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Trustus;
// font-family: 'Ubuntu', sans-serif;