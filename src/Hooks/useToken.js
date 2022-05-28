import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect( () =>{
        const email = user?.user?.email;
        console.log(email);
        const currentUser = {email: email};
        const url = `http://localhost:5000/users/${email}`;
        if(email){
            fetch(url, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(p => {
                console.log('data inside useToken', p);
                const accessToken = p.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}

export default useToken;