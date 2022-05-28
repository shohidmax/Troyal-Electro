import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Profilecard = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [user1, setUser1] = useState();
  console.log(user1);
  useEffect(() => {
    fetch(`https://shielded-beyond-98967.herokuapp.com/user1/${email}`)
      .then((response) => response.json())
      .then((data) => setUser1(data));
  }, []);
//   {
//     "_id": "62905bf9df9ff8a6e2446ded",
//     "email": "atifsupermart@gmail.com",
//     "role": "admin",
//     "address": "ababul",
//     "education": "ababul",
//     "location": "dablu",
//     "phoneN": "https://meet.google.com",
//     "socialurl": null
//     }
  
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4'>
            <h4 className="text-primary"> Welcome - {user?.displayName}</h4>
        <div className="card w-100">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">User Name : {user?.displayName}</li>
              <li className="list-group-item">Email : {user?.email}</li>  
              <li className="list-group-item">Address : {user1?.address}</li>  
              <li className="list-group-item">Education : {user1?.education}</li>  
              <li className="list-group-item">Location : {user1?.location}</li>  
              <li className="list-group-item">Phone : {user1?.phoneN}</li>  
              <li className="list-group-item"><a href={user.socialurl}> Social Profile{user.socialurl}</a></li>  

              <li className="list-group-item"> <Link to="/dashboard" className='btn btn-success'>Dashboard</Link></li>
            </ul>
        </div>

        </div>
        <div className='col-md-4'>

        </div>
        
    </div>
    
</div>
  );
};

export default Profilecard;
