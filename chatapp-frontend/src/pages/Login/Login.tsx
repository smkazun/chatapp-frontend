import React, {ChangeEvent, FormEvent, FormEventHandler, useState} from 'react';
import {LoginFormValues} from '../../types/types';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import FormLabel from 'react-bootstrap/FormLabel';
import './Login.css';


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

        <div className="wrapper">
            <div className="loginContainer">
                <Form>
                    <Stack gap={1} col-md-5 mx-auto>
                    `   
                            <Form.Label className="logo"> LOGO HERE</Form.Label>
                        

                        <Form.Group className="mb-3" controlId="formEmail">
                            <FloatingLabel 
                                controlId="floatingEmail"
                                label="Email address"
                            >
                                
                                <Form.Control type="email" placeholder="Email address"/>
                            </FloatingLabel>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formPassword">
                            <FloatingLabel 
                                controlId="floatingPassword"
                                label="Password"
                            >
                                <Form.Control type="password" placeholder="Password"/> 
                            </FloatingLabel>  
                        </Form.Group>
                            
                        <Button variant="primary" type="submit">Submit</Button>  
                    
                    </Stack>
                </Form>
                
            </div>
        </div>
    );
}

export default Login;