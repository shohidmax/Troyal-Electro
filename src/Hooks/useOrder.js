import { useEffect, useState } from "react";

const useProduct = () =>{
    const [Order, setOrder] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrder(data));
    }, []);
    return [Order, setOrder]
}

export default useProduct; 

