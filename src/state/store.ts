import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {photoReducer} from "./photoReducer";

const rootReducer = combineReducers({
    photo: photoReducer,
    // localstorage: localStorageReducer,
    // app: appReducer
})

export const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
    }
)

export type AppRootStateType = ReturnType<typeof rootReducer>