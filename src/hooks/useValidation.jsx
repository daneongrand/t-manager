import { useState, useEffect } from 'react';

const useValidation = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState(true)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (let validation in validations) {
            switch(validation) {
                case 'isEmpty': {
                    value ? setIsEmpty(true) : setIsEmpty(false)
                    break
                }
                case 'isEmail': {
                    (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) ? setIsEmail(true) : setIsEmail(false)
                    break
                }
                case 'isPassword': {
                    (value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) ? setIsPassword(true) : setIsPassword(false)
                    break
                }
            }
        }
    }, [value])

    useEffect(() => {
        (isEmpty || !isEmail || !isPassword) ? setInputValid(false) : setInputValid(true)
    }, [isEmpty, isEmail, isPassword])

    return {
        isEmpty,
        isEmail,
        isPassword,
        inputValid
    }
};

export default useValidation;