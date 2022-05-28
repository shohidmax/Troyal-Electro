
import { useEffect, useState } from "react";

const useReview = () =>{
    const [Review, setReview] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/review',{
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
            
        })
        .then(res => res.json())
        .then(data => setReview(data));
    }, []);
    return [Review, setReview]
}

export default useReview; 