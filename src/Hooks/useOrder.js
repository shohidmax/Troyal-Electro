import { useEffect, useState } from "react";

const useProduct = () =>{
    const [Order, setOrder] = useState([]);

    useEffect( ()=>{
        fetch('https://shielded-beyond-98967.herokuapp.com/orders',{
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrder(data));
    }, []);
    return [Order, setOrder]
}

export default useProduct; 

