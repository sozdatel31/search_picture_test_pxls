import React, {useEffect, useState} from 'react';
import style from './SearchPage.module.css'
import {PhotoType} from "../../App";
import InfiniteScroll from "react-infinite-scroll-component";
import {getPhotoThunk, searchPhotoThunk, setSearchTitle} from "../../state/photoReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {PhotoBox} from "../PhotoContainer/PhotoBox/PhotoBox";
import { useParams } from 'react-router-dom';

export function SearchPage() {
    const searchArray = useSelector<AppRootStateType, Array<PhotoType>>(state => state.photo.searchPhoto)
    //console.log("searchArray: ", searchArray)
    const [page, setPage] = useState(1);
    const searchTitleReducer = useSelector<AppRootStateType, string>(state => state.photo.searchTitleReducer)
    const { searchTitle } = useParams<{searchTitle: string}>()
    console.log('searchTitle: ', searchTitle)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setSearchTitle({searchTitleReducer: searchTitle} ))
        dispatch(searchPhotoThunk(searchTitle, 20, page))
    }, [page, dispatch]);

    function showMorePhotos() {
        setPage(cur=>cur + 1)
    }

    return (
        <div className={style.containerHomePage}>
            <div className={style.title}>
                <div className={style.titleContent}>Search photo</div>
            </div>
            <InfiniteScroll
                dataLength={searchArray.length}
                next={showMorePhotos}
                hasMore={true}
                loader={<div className="loader" key={0}>Loading ...</div>}>
               <PhotoBox photoArray={searchArray}/>
            </InfiniteScroll>
        </div>
    );
}