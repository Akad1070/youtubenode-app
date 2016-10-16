import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export function validateInput(input){
    let errors = {};
    
    if (Validator.isEmpty(input.email)) {
        errors.email = 'Must provide your Youtube Email';
    }else{
        if (!Validator.isEmail(input.email)) {
            errors.email = 'Your email is invalid';
        }
    }
    
    if (Validator.isEmpty(input.pwd)) {
        errors.pwd = 'Must provide your password';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    };
}
