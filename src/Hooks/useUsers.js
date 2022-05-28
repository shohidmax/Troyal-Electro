import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useProduct = () =>{
    const [users1, setusers1] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;


    useEffect( ()=>{
        fetch(`https://shielded-beyond-98967.herokuapp.com/user1/:${email}`)
        .then(res => res.json())
        .then(data => setusers1(data));
    },);
    return [users1, setusers1]
}

export default useProduct; 

