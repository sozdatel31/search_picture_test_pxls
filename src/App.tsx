import React from 'react';
import {Header} from "./components/Header/Header";
import {PhotoContainer} from "./components/PhotoContainer/PhotoContainer";
import {Router} from "./Route";

type srcType = {
    landscape: string
    large: string
    large2x: string
    medium: string
    original: string
    portrait: string
    small: string
    tiny: string
}

export type PhotoType = {
    avg_color: string
    height: number
    id: number
    liked: boolean
    photographer: string
    photographer_id: number
    photographer_url: string
    src: srcType
    url: string

}
type ResponseAnswer = {
    next_page: string,
    page: number,
    per_page: number;
    photos: Array<PhotoType>
}

function App() {

    return (
        <div>
            <Header/>
            <Router/>
        </div>
    );
}

export default App;
