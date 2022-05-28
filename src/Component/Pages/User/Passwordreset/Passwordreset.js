
import { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Passwordreset = () => {
  const [email, setEmail] = useState('');
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (sending) {
    return <p>Sending...</p>;
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4'>
        <div className="App mt-4">
      <input
      className="form-text form-control w-100  mt-4 me-2"
      placeholder='Your Email Address'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
      className='btn btn-primary mt-2'

        onClick={async () => {
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }}
      >
        Reset password
      </button>
    </div>

        </div>
        <div className='col-md-4'>

        </div>
      </div>
    </div>
  );
};
export default Passwordreset;