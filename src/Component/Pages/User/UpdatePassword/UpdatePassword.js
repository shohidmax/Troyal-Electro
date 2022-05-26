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
    <div className="App">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async () => {
          await updatePassword(email);
          alert('Updated password');
        }}
      >
        Update password
      </button>
    </div>
  );
};
export default UpdatePassword;