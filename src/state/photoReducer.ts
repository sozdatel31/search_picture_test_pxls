import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PhotoContainerType} from "../components/PhotoContainer/PhotoContainer";
import {PhotoType} from "../App";
import {appApi} from "../api/api";

type InitialStateType =  Array<PhotoType>


const initialState: InitialStateType = []

const slice = createSlice({
    name: "photoReducer",
    initialState: initialState,
    reducers: {
        setPhotoAC(state, action: PayloadAction<{ photo: Array<PhotoType> }>) {
           return action.payload.photo.map(m => m)

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
export const {setPhotoAC} = slice.actions
export const photoReducer = slice.reducer


export type ActionsType =
    ReturnType<typeof setPhotoAC>
    // | ReturnType<typeof removePictureAC>
    // | ReturnType<typeof setPicturesAC>;

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>;

export const getPhotoThunk = (page: number, per_page: number): ThunkType =>
    (dispatch) => {
        appApi.getPicture(page, per_page).then((res) => {
            console.log(res.data.photos)
            debugger
            dispatch(setPhotoAC({photo: res.data.photos}))
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