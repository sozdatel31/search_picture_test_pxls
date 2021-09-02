import React, {useState} from 'react';
import style from './PhotoBox.module.css'
import {PhotoType} from "../../../App";
import Masonry from "react-masonry-css";
import {useHistory} from "react-router-dom";
import {searchPhotoIdThunk} from "../../../state/photoReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";

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

    const dispatch = useDispatch()
    const [isModal, setModal] = useState<boolean>(false)
    let history = useHistory();



    const callbackOnClick = (id: number)=> {
        dispatch(searchPhotoIdThunk(id))
        history.push(`/photo/${id}`)

    }

    const onClose = () => setModal(false)
    return (
        <Masonry
            breakpointCols={breakpointCols}
            className={style.photoContainer}>
            {props.photoArray ? props.photoArray.map(m =>

                <div key={m.id} className={style.box} onClick={()=>callbackOnClick(m.id)}>

                <img src={m.src.large} alt="bla bla"/>
                <div className={style.boxInfo}>

                        <span>
                            <a href={m.photographer_url} className={style.author} target="_blank" rel="noreferrer"
                               onClick={e => e.stopPropagation()}>
                                <div className={style.authorPic} style={{background: `${m.avg_color}`}}></div>
                                <span>{m.photographer}</span>
                            </a>
                        </span>
                    <span>
                            <a href='' className={style.downloadIcon} target="_blank" rel="noopener noreferrer">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" fill="white"
                                         version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><g><path
                                        d="M72.2,43.2L58,57.4V17c0-2.2-1.8-4-4-4s-4,1.8-4,4v40.4L35.8,43.2c-1.6-1.6-4.1-1.6-5.7,0c-1.6,1.6-1.6,4.1,0,5.7l21,21   C52,70.7,53,71,54,71s2-0.4,2.8-1.2l21-21c1.6-1.6,1.6-4.1,0-5.7C76.3,41.6,73.8,41.6,72.2,43.2z"></path><path
                                        d="M32,87h44c2.2,0,4-1.8,4-4s-1.8-4-4-4H32c-2.2,0-4,1.8-4,4S29.8,87,32,87z"></path></g>
                                    </svg>
                                </i>
                            </a>
                            <button className={style.addToCollectionIcon} onClick={(e) => {
                                e.preventDefault();
                            }}>
                                {

                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                        </svg>
                                    </i>
                                }
                            </button>
                            <button className={style.likeIcon} onClick={(e) => {
                                e.preventDefault();
                            }}>
                                {
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                        </svg>
                                    </i>
                                }
                            </button>
                    </span>
                </div>
            </div>) : "Error"}
        </Masonry>
    );
}