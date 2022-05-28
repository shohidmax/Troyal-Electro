import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Element/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://shielded-beyond-98967.herokuapp.com/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div  className='container'>
            <h1>user role page</h1>
            <div className='row'>
            <div className='col-md-12'>
            <h2 className="text-primary">All Users: {users.length}</h2>
            <div className=" ">
                <table className="table  w-100">
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