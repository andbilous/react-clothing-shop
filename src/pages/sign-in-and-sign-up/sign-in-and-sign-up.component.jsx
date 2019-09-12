import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../sign-in-and-sign-up/sign-in-and-sign-up.component';

import './sign-in-and-sign-up.styles.scss';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
        </div>
)

export default SignInAndSignUpPage;