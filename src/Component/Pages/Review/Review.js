import React from 'react';
import useReview from '../../../Hooks/useReview';

const Review = () => {
    const [Review, setReview] = useReview();
    return (
        <div className='container'>
            <div className='row'>
                <h1>revew {Review.length}</h1>
                {
                    Review.map(R => <div className="col-md-3">
                    <div class="card ">
                        <img class="card-img-top img-thumbnail" style={{height: '200px'}} src={R.img} alt="Card image cap"/>
                        <div class="card-body">
                         <h5 class="card-title">Rating 5 Out of {R.rating}</h5>
                    <p class="card-text">{R.long_discription}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                     </div>
                </div>
    
                    </div>)
                }

                
            </div>
        </div>
    );
};

export default Review;