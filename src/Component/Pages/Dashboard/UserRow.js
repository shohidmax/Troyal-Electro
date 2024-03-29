import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://shielded-beyond-98967.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    alert.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    alert('succesfull added an admin.');
                }

            })
    }
    const removeAdmin = () => {
        const proceed = window.confirm(`Are you sure you want to remove from Admin? ${email}`);
        if(proceed){
            fetch(`https://shielded-beyond-98967.herokuapp.com/users/nonadmin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    alert.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    alert(`Admin remove successfully ${email}`);
                }

            })

        }
        
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-info">Make Admin</button>} {role == 'admin' && <button className="btn btn-info">Admin</button>}</td>
            <td><button className="btn btn-danger" onClick={removeAdmin}>Remove admin</button></td>
        </tr>
    );
};

export default UserRow;