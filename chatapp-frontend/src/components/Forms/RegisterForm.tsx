import React, {ChangeEvent, FormEvent, FormEventHandler, useState} from 'react';
import {LoginFormValues} from '../../types/types';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './RegisterForm.css'
import { Link } from 'react-router-dom';



const RegisterForm = ({onFormChange}: any) => {

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


    //TODO: rewrite so loginContainer can be switched out for register form
    return (

            <div className="registerContainer">
                <Form>
                    <Stack gap={1} col-md-5 mx-auto>   
                            <Form.Label className="logo"> LOGO HERE</Form.Label>

                        <Form.Group className="mb-3" controlId="formFirstName">
                            <FloatingLabel 
                                controlId="floatingFirstName"
                                label="First name"
                            >
                                
                                <Form.Control type="text" placeholder="First Name"/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <FloatingLabel 
                                controlId="floatingLastName"
                                label="Last name"
                            >
                                
                                <Form.Control type="text" placeholder="Last name"/>
                            </FloatingLabel>
                        </Form.Group>
                        

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

                        <Form.Group className="mb-3" controlId="formConfirmPassword">
                            <FloatingLabel 
                                controlId="floatingConfirmPassword"
                                label="Confirm password"
                            >
                                <Form.Control type="password" placeholder="Confirm password"/> 
                            </FloatingLabel>  
                        </Form.Group>
                            
                        <Button variant="primary" type="submit">Register</Button>
                        
                        <Form.Text className="text-muted">
                            Already have an account? <Link to='#' onClick={() => onFormChange('login')}>Login</Link>
                        </Form.Text>
                    </Stack>
                </Form>
                
            </div>
    );
}

export default RegisterForm;