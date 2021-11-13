import React from 'react';
import styled from 'styled-components';
import OpenAnalytics from '../UI/icons/OpenAnalytics'
import AddIcon from '../UI/icons/AddIcon'
import AddMinusPhrase from '../UI/icons/AddMinusPhrase'
import DeleteKeyword from '../UI/icons/DeleteKeyword'


const KeywordItem = ({keyword}) => {

    const iconConfig = {
        width: "24",
        height: "24",
        color: "#fff"
    }


    const Keyword = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 18px;
    `

    const Text = styled.p`
        margin: 0;
    `

    const ButtonsList = styled.ul`
        margin: 0;
        display: flex;
    `

    const ButtonItem = styled.li`
        padding: 0;
        list-style-type: none;
    `

    const Button = styled.button`
        cursor: pointer;
        padding: 0;
        outline: none;
        background-color: transparent;
        border: 0;
    `


    return (
        <Keyword>
            <Text>
                {keyword}
            </Text>
            <ButtonsList>
                <ButtonItem>
                    <Button>
                        <OpenAnalytics {...iconConfig} />
                    </Button>
                </ButtonItem>
                <ButtonItem>
                    <Button>
                        <AddIcon {...iconConfig} />
                    </Button>
                </ButtonItem>
                <ButtonItem>
                    <Button>
                        <AddMinusPhrase {...iconConfig} />
                    </Button>
                </ButtonItem>
                <ButtonItem>
                    <Button>
                        <DeleteKeyword {...iconConfig} />
                    </Button>
                </ButtonItem>
            </ButtonsList>
        </Keyword>
    );
};

export default KeywordItem;