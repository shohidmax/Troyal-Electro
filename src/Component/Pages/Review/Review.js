import React from 'react';
import useReview from '../../../Hooks/useReview';

const Review = () => {
    const [Review, setReview] = useReview();
    return (
        <div className='container m-3 mx-auto'>
            <div className='row mx-auto'>
                <h1 className='text-info'>Coustomar Review</h1>
                {
                    Review.map(R => <div className="col-md-3 mx-auto">
                    <div className="card ">
                        <img className="card-img-top img-thumbnail" style={{height: '200px'}} src={R.img} alt="Card image cap"/>
                        <div className="card-body">
                         <h5 className="card-title">Rating 5 Out of {R.rating}</h5>
                    <p className="card-text">{R.long_discription}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                     </div>
                </div>
                <div>
                    
                    
                    {/* {Review.rating.for(q => <h1>{q}</h1>)} */}
                </div>
    
                    </div>)
                }

                
            </div>
        </div>
    );
};

export default Review;