import React, {ChangeEvent, useState} from 'react';
import style from './SearchInput.module.css'
import {useDispatch} from "react-redux";
import {searchPhotoThunk} from "../../state/photoReducer";
import {useHistory} from 'react-router-dom';

type searchInputPropsType = {
    visible?: boolean
}

export function SearchInput(props: searchInputPropsType) {
    const dispatch = useDispatch()
    let history = useHistory();
    const [search, setSearch] = useState<string>('')
    const eventSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    const submitSearch = () => {
        dispatch(searchPhotoThunk(search, 20))
        history.push(`/search/${search}`)
        console.log("search: ", search)
    }


    return (
        <div className={style.searchInputContainer}
             style={props.visible ? {visibility: "hidden"} : {visibility: "visible"}}>
            <input placeholder="Search for free photos" value={search} onChange={eventSearch} onSubmit={submitSearch}/>
            <button id="search-action" title="Search for stock photos" onClick={submitSearch}>
                <i className={style.rd__svgIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </i>
            </button>

        </div>
    );
}

