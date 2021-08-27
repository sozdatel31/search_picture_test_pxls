import React from 'react';
import style from './PhotoBox.module.css'
import {PhotoType} from "../../../App";
import Masonry from "react-masonry-css";

type PhotoBoxType = {
    photoArray: Array<PhotoType>
}
const breakpointCols = {
    default: 4,
    1600: 3,
    900: 2,
    600: 1
}


export function PhotoBox(props: PhotoBoxType) {

    return (
        <Masonry
            breakpointCols={breakpointCols}
            className={style.photoContainer}>
            {props.photoArray ? props.photoArray.map(m => <div key={m.id} className={style.box}>
                <img  src={m.src.large} alt="bla bla"/>
            </div>) : "Error"}
        </Masonry>
    );
}