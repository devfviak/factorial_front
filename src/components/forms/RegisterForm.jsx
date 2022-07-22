import React, { useState } from 'react';
import { signUpUser } from '../../api/auth';
import { useAuth } from '../../contexts/authContext';
import RoundedButton from './RoundedButton';
import TextInput from './TextInput';

function RegisterForm () {
  const { onSingIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = () => {
    signUpUser({ email, password, firstName, lastName, phone })
      .then(_response => onSingIn())
      .catch(error => setErrors(error.response.data.errors));
  };

  return (
    <div className='flex flex-col flex-grow justify-start items-center w-full'>
      <div className='pb-3 w-full'>
        <div className='pb-3 w-full'>
          <TextInput
            required
            labelName="Email"
            type="email"
            inputId="email"
            maxLength={50}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors?.email?.[0]}
          />
        </div>

        <div className='pb-3 w-full'>
          <TextInput
            required
            labelName="Password"
            type="password"
            inputId="password"
            maxLength={50}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors?.password?.[0]}
          />
        </div>

        <div className='pb-3 w-full'>
          <TextInput
            required
            labelName="First name"
            type="text"
            inputId="firstName"
            maxLength={50}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={errors?.firstName?.[0]}
          />
        </div>

        <div className='pb-3 w-full'>
          <TextInput
            required
            labelName="Last name"
            type="text"
            inputId="lastName"
            maxLength={50}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={errors?.lastName?.[0]}
          />
        </div>

        <div className='pb-3 w-full'>
          <TextInput
            required
            labelName="Phone"
            type="text"
            inputId="phone"
            maxLength={50}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <RoundedButton title="Sign up" onClick={handleSubmit}/>
    </div>
  );
}

export default RegisterForm;
