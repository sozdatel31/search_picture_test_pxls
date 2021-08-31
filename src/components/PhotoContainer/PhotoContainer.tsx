import React, {useEffect, useState} from 'react';
import style from './PhotoContainer.module.css'
import {PhotoType} from "../../App";
import InfiniteScroll from "react-infinite-scroll-component";
import {getPhotoThunk} from "../../state/photoReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {PhotoBox} from "./PhotoBox/PhotoBox";
import {Header} from "../Header/Header";

export function PhotoContainer() {
    const photoArray = useSelector<AppRootStateType, Array<PhotoType>>(state => state.photo.photo)
    const [page, setPage] = useState(1);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPhotoThunk(page, 20))
    }, [dispatch, page]);

    function showMorePhotos() {
        setPage(cur => cur + 1)
    }

    return (<div>
            <Header/>
            <div className={style.containerHomePage}>
                <div className={style.title}>
                    <div className={style.titleContent}>Free Stock Photos</div>
                </div>
                <InfiniteScroll
                    dataLength={photoArray.length}
                    next={showMorePhotos}
                    hasMore={true}
                    loader={<div className="loader" key={0}>Loading ...</div>}>
                    <PhotoBox photoArray={photoArray}/>
                </InfiniteScroll>
            </div>
        </div>
    );
}