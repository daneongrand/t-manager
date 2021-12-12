import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../actions/filesActions';
import styled from 'styled-components';
import { UPLOAD_FILES_ERROR } from '../../utils/constTypes';
import Loader from '../UI/loader/Loader';

const UploadFileContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DraggingSection = styled.section`
    width: 90%;
    height: 90%;
    border: 2px dashed white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-align: center;
`

const UploadSection = styled.section`
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const UploadLabel = styled.label`
    color: white;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
`

const UploadInput = styled.input.attrs({
    type: 'file'
})`
    margin-top: 10px;
`



const ErrorMessage = styled.p`
    color: ${props => props.theme.colors.danger};
    font-size: 16px;
    font-weight: 800;
`

const UploadFileSection = () => {

    const isLoading = useSelector(state => state.files.isLoading)
    const errorMessage = useSelector(state => state.files.errorMessage)
    const dispatch = useDispatch()

    console.log(isLoading)

    const [ isDragging, setIsDragging ] = useState(false)

    const dragStartHandler = e => {
        e.preventDefault()
        setIsDragging(true)
    }

    const dragLeaveHandler = e => {
        e.preventDefault()
        setIsDragging(false)
    }

    const onDropHandler = e => {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        let file = files[0]
        postFile(file)
    }

    const postFile = (file) => {
        const splitName = file.name.split('.')
        const ext = splitName[splitName.length - 1]
        console.log(ext)
        if (ext !== 'csv') {
            dispatch({ type: UPLOAD_FILES_ERROR, payload: 'Расширение файла не .csv'})
        } else {
            const formData = new FormData()
            formData.append('file', file)
            setIsDragging(false)
            dispatch(uploadFile(formData))
        }
    }

    return (
        <UploadFileContainer>
            {
                (isDragging) 
                    ? <DraggingSection
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    >
                        Отпустите файлы, чтобы загрузить их
                    </DraggingSection>
                    : <UploadSection
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                    >
                        <Form>
                            <UploadLabel>
                                Перенесите сюда .csv файл или загрузите
                                <UploadInput
                                    onChange={e => postFile(e.target.files[0])}
                                />
                            </UploadLabel>
                            {
                                (errorMessage) && <ErrorMessage>
                                    { errorMessage }
                                </ErrorMessage>
                            }
                        </Form>
                    </UploadSection>
            }
            {
                (isLoading) && <Loader />
            }
        </UploadFileContainer>
    );
};

export default UploadFileSection;