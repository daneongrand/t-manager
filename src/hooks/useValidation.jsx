import { useState, useEffect } from 'react';

const useValidation = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState(true)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (let validation in validations) {
            switch(validation) {
                case 'isEmpty': {
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break
                }
                case 'isEmail': {
                    (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) ? setEmailError(false) : setEmailError(true)
                    break
                }
                case 'isPassword': {
                    (value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) ? setPasswordError(false) : setPasswordError(true)
                    break
                }
            }
        }
    }, [value])

    useEffect(() => {
        (isEmpty || emailError || passwordError) ? setInputValid(false) : setInputValid(true)
    }, [isEmpty, emailError, passwordError])

    return {
        isEmpty,
        emailError,
        passwordError,
        inputValid
    }
};

export default useValidation;