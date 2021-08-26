import React from 'react';
import style from './PhotoContainer.module.css'
import Masonry from "react-masonry-css";
import {PhotoType} from "../../App";

export type PhotoContainerType = {
    photoArr: Array<PhotoType>
}

export function PhotoContainer(  props: PhotoContainerType) {
    const breakpointCols = {
        default: 4,
        1200: 3,
        700: 2,
        500: 1
    }
    return (
        <div className={style.containerHomePage}>
            <div className={style.title}>
                <div className={style.titleContent}>Free Stock Photos</div>
            </div>
            <Masonry
                breakpointCols={breakpointCols}
                className={style.photoContainer}>
                {props.photoArr? props.photoArr.map(m=> <img src={m.src.large} alt="bla bla"/>) : "Error"}
            </Masonry>
        </div>
    );
}

