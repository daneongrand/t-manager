import React from 'react';
import styled from 'styled-components';


const OptionContent = styled.div`
`

const Option = ({children}) => {
    return (
        <OptionContent>
            {children}
        </OptionContent>
    );
};

export default Option;