
import { useEffect, useState } from "react";

const useReview = () =>{
    const [Review, setReview] = useState([]);

    useEffect( ()=>{
        fetch('https://shielded-beyond-98967.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data));
    }, []);
    return [Review, setReview]
}

export default useReview; 