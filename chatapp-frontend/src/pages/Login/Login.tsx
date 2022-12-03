import React, {ChangeEvent, FormEvent, FormEventHandler, useState} from 'react';
import {LoginFormValues} from '../../types/types';


const Login = () => {

    const [formValues, setFormValues] = useState<LoginFormValues>({username: '', password: ''});


    //Validation-----------------------------------------------------------
    const validateForm = (values: LoginFormValues): boolean => {
        
        //TODO: call validators
        return false;
    }

    //Validation END-----------------------------------------------------------

    //FormEvents ---------------------------------------------------------------
    const onEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValues((values) => ({
            ...values,
            username: e.target.value,
        }));
    }

    const onPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValues((values) => ({
            ...values,
            password: e.target.value,
        }));
    }

    
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //validation 
        if(!validateForm(formValues)){
            //reject
        }
        
    }
    //FormEvents  END---------------------------------------------------------------


    //TODO:
    return (
        <div>
            LoginPage
            <form onSubmit={handleSubmit}>

                <input 
                    type='text' 
                    name='username' 
                    placeholder='username'
                    onChange={onEmailInputChange}/>

                <input 
                    type='text' 
                    name='password' 
                    placeholder='password'
                    onChange={onPasswordInputChange}/>

                <input 
                    type='submit' 
                    value="Login" 
                    />
            </form>

        </div>
    );
}

export default Login;