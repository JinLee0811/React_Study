import { useState } from 'react';
import Button from './Button';
import CustomInput from './CustomInput';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className='w-full max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-600'>
      <div className='flex flex-col gab-2 mb-6'>
        <p>
          <CustomInput
            label={'Email'}
            type='email'
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <CustomInput
            label={'Password'}
            type='password'
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className='actions'>
        <button className='m-10'>Create a new account</button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
