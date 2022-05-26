import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <p>loading</p>;
    }
    return (
        <div  className='container'>
            <h1>user role page</h1>
            <div className='row'>
            <div className='col-md-12'>
            <h2 className="text-primary">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table  w-100">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>

            </div>

        </div>
    );
};

export default Users;