import { useState, useEffect} from 'react';
import useInput from './useInput';

const useConfirmPassword = (confirmPassword = '', password = '') => {
    const confirmPasswordInput = useInput(confirmPassword)
    const [passwordsMatched, setPasswordsMatched ] = useState(false)


    useEffect(() => {
        confirmPasswordInput.value === password ? setPasswordsMatched(true) : setPasswordsMatched(false)
    }, [confirmPasswordInput.value])

    return {
        ...confirmPasswordInput,
        passwordsMatched
    }
};

export default useConfirmPassword;