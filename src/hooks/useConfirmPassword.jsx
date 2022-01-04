import { useState, useEffect} from 'react';
import useInput from './useInput';

const useConfirmPassword = (confirmPassword = '', password = '') => {
    const confirmPasswordInput = useInput(confirmPassword, { isEmpty: true })
    const [passwordsMatched, setPasswordsMatched ] = useState(false)


    useEffect(() => {
        (confirmPasswordInput.value && (confirmPasswordInput.value === password)) ? setPasswordsMatched(true) : setPasswordsMatched(false)
    }, [confirmPasswordInput.value, password])

    return {
        ...confirmPasswordInput,
        passwordsMatched
    }
};

export default useConfirmPassword;