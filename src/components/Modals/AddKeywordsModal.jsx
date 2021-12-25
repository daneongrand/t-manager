import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader'
import styled from 'styled-components';
import { TOGGLE_MODAL_ADD_KEYWORDS } from '../../utils/constTypes';
import { AddIcon, UploadFile } from '../UI/icons/Icons';
import { BackgroundBlur, CloseButton } from '../UI/modal/Modal';
import AddKeywordsSection from './AddKeywordsSection';
import UploadFileSection from './UploadFileSection';

const AddKeywordsModalContainer = styled.section`
    width: 60%;
    height: 50%;
    background: rgba(14, 14, 35, .9);
    border-radius: 10px;
    display: grid;
    grid-template-columns: 30% 70%;
    @media ${props => props.theme.media.desktop_small} {
        width: 80%;
        height: 70%;
    }
    @media ${props => props.theme.media.tablet} {
        width: 80vw;
        height: 80vh;
        grid-template-columns: 50px 1fr;
    }
    @media ${props => props.theme.media.mobile} {
        width: 90vw;
        height: 90vh;
    }
`

const Aside = styled.div`
    display: grid;
    grid-template-rows: 40px 1fr;
    @media ${props => props.theme.media.tablet} {
        width: 100%;
    }
`

const Tabs = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
`

const TabsItem = styled.li`
    list-style-type: none;
    width: 100%;
`

const TabButton = styled.button`
    display: grid;
    grid-template-columns: 24px 1fr;
    align-items: center;
    width: 100%;
    border: 0;
    padding: 10px 15px;
    background-color: ${props => props.isActive ? 'rgba(29, 29, 48, .9)' : 'transparent'};
    transition: .2s;
    &:hover {
        background-color: rgba(29, 29, 48, .9);
    }
    @media ${props => props.theme.media.tablet} {
        grid-template-columns: 24px 0;
    }
`

const TabName = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    margin: 0;
    font-size: 16px;
    margin-left: 10px;
    font-weight: ${props => props.isActive ? '600' : '400'};
    color: ${props => props.isActive ? 'white' : props.theme.colors.blue};
    @media ${props => props.theme.media.tablet} {
        display: none;
    }
`

const Header = styled.header`
    align-self: center;
    padding: 0px 15px;
    @media ${props => props.theme.media.tablet} {
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
    }
`

const Article = styled.article`
    border-radius: 0px 10px 10px 0px;
    background-color: rgba(14, 14, 35, 1);
    @media ${props => props.theme.media.tablet} {
        width: 100%;
    }
`


const AddKeywordsModal = () => {

    const dispatch = useDispatch()
    const [ activeTab, setActiveTab ] = useState('uploadFile')


    console.log(activeTab)

    return (
        <BackgroundBlur>
            <AddKeywordsModalContainer>
                <Aside>
                    <Header>
                        <CloseButton 
                            onClick={() => dispatch({ type: TOGGLE_MODAL_ADD_KEYWORDS })}
                        />
                    </Header>
                    <Tabs>
                        <TabsItem>
                            <TabButton
                                isActive={(activeTab === 'addKeyword')}
                                onClick={() => setActiveTab('addKeyword')}
                            >
                                <AddIcon width='24' heigth='24' fill={(activeTab === 'addKeyword' ? 'white' : '#4255D4')} />
                                <TabName
                                    isActive={(activeTab === 'addKeyword')}
                                >Добавить ключевое слово</TabName>
                            </TabButton>
                        </TabsItem>
                        <TabsItem>
                            <TabButton
                                isActive={(activeTab === 'uploadFile')}
                                onClick={() => setActiveTab('uploadFile')}
                            >
                                <UploadFile width='24' heigth='24' color={(activeTab === 'uploadFile' ? 'white' : '#4255D4')} />
                                <TabName
                                    isActive={(activeTab === 'uploadFile')}
                                >Загрузить с компьютера</TabName>
                            </TabButton>
                        </TabsItem>
                        
                    </Tabs>
                </Aside>
                <Article>
                    {
                        (activeTab === 'uploadFile') && <UploadFileSection />
                    }
                    {
                        (activeTab === 'addKeyword') && <AddKeywordsSection />
                    }
                </Article>
            </AddKeywordsModalContainer>
        </BackgroundBlur>
    );
};

export default AddKeywordsModal;