import React, {useState} from 'react';
import LoginForm from '../../components/Forms/LoginForm';
import RegisterForm from '../../components/Forms/RegisterForm';
import './LoginPage.css';

const LoginPage = () => {

   const [currentForm, setCurrentForm] = useState<string>('login');

   const toggleForm = (formName: string) =>{
    setCurrentForm(formName);
   } 

    //TODO: rewrite so loginContainer can be switched out for register form
    return (

        <div className="wrapper" >
           {currentForm === 'login' ? <LoginForm onFormChange={toggleForm}/> : <RegisterForm onFormChange={toggleForm}/>}
          
        </div>
    );
}

export default LoginPage;