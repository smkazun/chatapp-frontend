

export const emailValidator = (email: string) => {

    if(!email){
        return 'Email is required';
    }
}

export const passwordValidator = (password: string) => {

    if(!password){
        return 'Password is required';
    }
    else if(password.length < 8){
        return 'Password must have minimum length of 8 characters';
    }

    return '';
}