import React, { useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { signOutUser } from '../../api/auth';
import { updateUser } from '../../api/user';

import UserLayout from '../../components/layout/UserLayout';
import FactorialCard from '../../components/ui/FactorialCard';
import avatar from '../../assets/avatar.jpeg';
import TextInput from '../../components/forms/TextInput';

function ProfilePage () {
  const { user, onSignOut } = useAuth();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const [errors, setErrors] = useState(null);

  const signOut = () => {
    signOutUser()
      .then((_response) => onSignOut());
  };

  const updateProfile = () => {
    updateUser({ firstName, lastName, email, phone })
      .then((_response) => console.log('updated'))
      .catch(error => setErrors(error.response.data.errors));
  };

  return (
    <UserLayout>
      <FactorialCard>
        {/* Header */}
        <div className='grid grid-cols-3 items-center py-3 border-gray-300 border-b'>
          <div></div>

          <div className='flex flex-row justify-center'>
            <h1 className='text-factorial-gray-dark font-medium' >
              Profile
            </h1>
          </div>

          <div className='flex flex-row justify-end pr-4'>
            <button
              className='bg-factorial-gray-dark py-1 px-3 rounded-full text-white'
              onClick={(_) => signOut()}
            >
              <span className='text-xs'>Log out</span>
            </button>
          </div>

        </div>

        { /* Content */ }
        <div className='flex flex-col flex-grow items-center justify-around py-14 border-gray-300 border-'>
          <div className='w-1/2 p-3 boder rounded-lg bg-factorial-gray flex flex-col items-center'>
            <img className=' h-20 rounded-full -translate-y-1/2' src={avatar} alt='avatar'/>

            <div className='p-1 mb-2 w-11/12'>
              <TextInput
                required={true}
                labelName="Email"
                type="email"
                inputId="email"
                maxLength={50}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={true}
                error={errors?.email?.[0]}
              />
            </div>

            <div className='p-1 mb-2 w-11/12'>
              <TextInput
                required={true}
                labelName="First name"
                type="text"
                inputId="firstName"
                maxLength={50}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={errors?.firstName?.[0]}
              />
            </div>

            <div className='p-1 mb-2 w-11/12'>
              <TextInput
                required={true}
                labelName="Last name"
                type="text"
                inputId="lastName"
                maxLength={50}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={errors?.lastName?.[0]}
              />
            </div>

            <div className='p-1 mb-2 w-11/12'>
              <TextInput
                required={true}
                labelName="Phone"
                type="text"
                inputId="phone"
                maxLength={50}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={errors?.phone?.[0]}
              />
            </div>

            <div className='py-3'>
              <button
                className='bg-factorial-pink py-2 px-3 rounded-full text-white'
                onClick={(_) => updateProfile()}
              >
                <span className='text-md font-light'>Update</span>
              </button>
            </div>
          </div>
        </div>

      </FactorialCard>
    </UserLayout>
  );
}

export default ProfilePage;
