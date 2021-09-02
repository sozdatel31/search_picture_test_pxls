import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PhotoType} from "../App";
import {appApi} from "../api/api";

export type InitialStateType = {
    photo: Array<PhotoType>
    searchPhoto: Array<PhotoType>
    searchTitleReducer: string
    photoObj?: {
        avg_color: string
        height: number
        id: number
        liked: boolean
        photographer: string
        photographer_id: number
        photographer_url: string
        src:
            {
                landscape: string,
                large: string,
                large2x: string,
                medium: string,
                original: string,
                portrait: string,
                small: string,
                tiny: string,
            },
        url: string,
        width: number
    }
}


const initialState: InitialStateType = {
    photo: [],
    searchPhoto: [],
    searchTitleReducer: '',
    photoObj: {
        avg_color: '',
        height: 0,
        id: 0,
        liked: false,
        photographer: '',
        photographer_id: 0,
        photographer_url: '',
        src:
            {
                landscape: '',
                large: '',
                large2x: '',
                medium: '',
                original: '',
                portrait: '',
                small: '',
                tiny: '',
            },
        url: '',
        width: 0
    }
}

const slice = createSlice({
    name: "photoReducer",
    initialState: initialState,
    reducers: {
        setPhoto(state, action: PayloadAction<{ photo: Array<PhotoType> }>) {
            state.photo.push(...action.payload.photo)
            return state
        },
        searchPhoto(state, action: PayloadAction<{ searchPhoto: Array<PhotoType>, searchTitle: string }>) {
            if (state.searchTitleReducer === action.payload.searchTitle) {
                state.searchPhoto.push(...action.payload.searchPhoto)
                return state
            }
            if (state.searchTitleReducer !== action.payload.searchTitle) {
                state.searchPhoto = action.payload.searchPhoto
                return state
            } else {
                state.searchPhoto = action.payload.searchPhoto
                return state
            }
        },
        setSearchTitle(state, action: PayloadAction<{ searchTitleReducer: string, }>) {
            state.searchTitleReducer = (action.payload.searchTitleReducer)

            return state
        },
        setSearchIdTitle(state, action: PayloadAction<{ photoObj: InitialStateType["photoObj"] }>) {
            state.photoObj = (action.payload.photoObj)

            return state
        },

        // removePictureAC(state, action: PayloadAction<{ photoId: string }>) {
        //     const index = state.findIndex(ph => ph.id === action.payload.photoId)
        //     if (index > -1) {
        //         state.splice(index, 1)
        //     }
        // },
        // setPicturesAC(state, action: PayloadAction<Array<DomainPhotoType>>) {
        //
        //     state = action.payload
        //     return state
        // }

    }
})
export const {setPhoto, searchPhoto, setSearchTitle, setSearchIdTitle} = slice.actions
export const photoReducer = slice.reducer


export type ActionsType =
    ReturnType<typeof setPhoto>
    | ReturnType<typeof searchPhoto>
    | ReturnType<typeof setSearchIdTitle>;

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>;

export const getPhotoThunk = (page: number, per_page: number): ThunkType =>
    (dispatch) => {
        appApi.getPicture(page, per_page).then((res) => {
            dispatch(setPhoto({photo: res.data.photos}))
        })
    }

export const searchPhotoThunk = (query: string, per_page: number, page?: number): ThunkType =>
    (dispatch) => {

        appApi.searchPicture(query, per_page, page).then((res) => {
            console.log(res.data.photos)
            dispatch(searchPhoto({
                searchPhoto: res.data.photos,
                searchTitle: query,
            }))
        })
    }

export const searchPhotoIdThunk = (id: number): ThunkType =>
    (dispatch) => {

        appApi.searchIdPicture(id).then((res) => {
            console.log(res.data)
            dispatch(setSearchIdTitle({
                photoObj: res.data
            }))
        })
    }

// export const addPicture = (photo: DomainPhotoType): ThunkType =>
//     (dispatch, getState: () => AppRootStateType) => {
//         let state = localStorage.getItem("state");
//         state && dispatch(setPicturesAC(JSON.parse(state)));
//         dispatch(addPictureAC({photo}));
//         localStorage.setItem("state", JSON.stringify(getState().localstorage));
//     }

// export const removePicture = (photoId: string): ThunkType =>
//     (dispatch, getState: () => AppRootStateType) => {
//         dispatch(removePictureAC({photoId}));
//         localStorage.setItem("state", JSON.stringify(getState().localstorage));
//     }
//
// export const setPictures = (): ThunkType =>
//     (dispatch) => {
//
//         let state = localStorage.getItem("state");
//         state && dispatch(setPicturesAC(JSON.parse(state)));
//     }