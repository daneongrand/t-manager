import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPostList } from '../../actions/historyPostActions';
import PaginationButton from '../UI/buttons/PaginationButton';
import Loader from '../UI/loader/Loader';
import ProfilePostItem from './ProfilePostItem';

const PostContainer = styled.article`

`


const PostList = styled.ul`
    padding: 0;
    margin: 0;
    position: relative;
    min-height: 200px;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const PrevBtn = styled(PaginationButton)`
    border-radius: 5px 0px 0px 5px;
`

const NextBtn = styled(PaginationButton)`
    border-radius: 0px 5px 5px 0px;
`

const ProfilePost = () => {
    const limit = 5
    const [ page, setPage ] = useState(1)

    useEffect(() => {
        console.log("page " + page)
    }, [page])

    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.historyPost.isLoading)
    const count = useSelector(state => state.historyPost.count)
    const postList = useSelector(state => state.historyPost.postList)
    useEffect(() => {
        dispatch(getPostList(limit, page))
    }, [page])

    const pageCount = Math.ceil(count / limit)
    console.log(pageCount)

    // const postList = useSelector()
    return (
        <PostContainer>
            <PostList>
                {
                    isLoading
                        ? <Loader 
                            backdropFilter='none'
                            backgroundColor='transparent'
                        />
                        : postList.map(item => (<ProfilePostItem key={'post-' + item.id} {...item} />))
                }
            </PostList>
            <ButtonsContainer>
                <PrevBtn
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Предыдущая
                </PrevBtn>
                <NextBtn
                    onClick={() => setPage(page + 1)}
                    disabled={page == pageCount}
                >
                    Следующая
                </NextBtn>
            </ButtonsContainer>
        </PostContainer>
    );
};

export default ProfilePost;