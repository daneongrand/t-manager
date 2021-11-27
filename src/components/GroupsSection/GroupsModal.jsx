import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Section from '../UI/section/Section';
import GroupsSection from './GroupsSection';

const GroupItem = styled.section`

`

const ButtonsContainer = styled.div`

`

const Button = styled.button`

`

const GroupsModal = ({groups}) => {
    console.log(groups)
    return (
        <Section>
            {
                groups.map((item, index) => (
                    <GroupItem key={item.groupId}> {item.groupName} </GroupItem>
                ))
            }
            <ButtonsContainer>
                <Button>Добавить</Button>
                <Button>Отмена</Button>
            </ButtonsContainer>
        </Section>
    );
};

const MapDispatchToProp = {

}

export default connect(null, null)(GroupsModal);