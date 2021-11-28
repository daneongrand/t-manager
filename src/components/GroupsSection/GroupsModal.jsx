import React from 'react';
import { connect } from 'react-redux';
import { selectGroup, moveIntoGroup, toggleModalGroups } from '../../redux/actions';
import styled from 'styled-components';
import { Section } from '../UI/section/Section';
import GroupsSection from './GroupsSection';


const GroupContainer = styled(Section)`
    width: 40%;
    height: 50%;
`

const GroupItem = styled.section`
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10px;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 20px 18px;
    color: white;
    box-shadow: ${props => props.selected ? "0px 0px 10px green" : "none"};
`

const ButtonsContainer = styled.div`

`

const Button = styled.button`

`

const GroupsModal = ({groups, selectGroup, selectedGroup, moveIntoGroup, source, toggleModalGroups}) => {

    console.log(selectedGroup)
    console.log(source)


    return (
        <GroupContainer>
            {
                groups.map((item, index) => (
                    <GroupItem
                        key={item.groupId}
                        onClick={() => {
                            selectGroup({
                                droppableId: item.groupId,
                                index: 0
                            })
                        }}
                        selected={(item.groupId === selectedGroup.droppableId) ? true : false}
                    > 
                        {item.groupName}
                    </GroupItem>
                ))
            }
            <ButtonsContainer>
                <Button
                    onClick={
                        () => {
                            moveIntoGroup({
                                ...source,
                            }, {
                                ...selectedGroup
                            })
                            toggleModalGroups()
                        }
                    }
                >
                    Добавить
                </Button>
                <Button>Отмена</Button>
            </ButtonsContainer>
        </GroupContainer>
    );
};

const MapStateToProps = state => {
    return {
        source: state.constructors.selectedKeyword.keyword,
        selectedGroup: state.constructors.selectedGroup
    }
}


const MapDispatchToProps = {
    moveIntoGroup,
    selectGroup,
    toggleModalGroups
}

export default connect(MapStateToProps, MapDispatchToProps)(GroupsModal);