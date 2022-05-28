
import { useEffect, useState } from "react";

const useProduct = () =>{
    const [Product, setProduct] = useState([]);

    useEffect( ()=>{
        fetch('https://shielded-beyond-98967.herokuapp.com/products',{
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
        })
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);
    return [Product, setProduct]
}

export default useProduct; 