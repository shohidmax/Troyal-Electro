import { useState } from 'react';
import { useAuthState, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [updatePassword, updating, error] = useUpdatePassword(auth);
  const [user] = useAuthState(auth);
const email = user?.email;
console.log(email);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (updating) {
    return <p>Updating...</p>;
  }
  return (
    <div className='container'>
      <h1 className='text-success'>Update Password</h1>
      <div className='row'>
        <div className='col-md-4'>

        </div>

      <div className="App col-md-4">
      <input className='form-text form-control m-2 w-100 mb-2'
      placeholder='your Password'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button className='btn btn-success'
        onClick={async () => {
          await updatePassword(email);
          alert('Updated password');
        }}
      >
        Update password
      </button>
    </div>
    <div className='col-md-4'>

        </div>
      </div>
    </div>
  );
};
export default UpdatePassword;