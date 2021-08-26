import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {appApi} from "./api/api";
import {PhotoContainer} from "./components/PhotoContainer/PhotoContainer";

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
    const [state, setState] = useState<Array<PhotoType>>([])
    const get = () => {
        appApi.getPicture(2, 40).then((res) => {
            console.log(res.data.photos)
            setState(res.data.photos)
        })
    }
    return (
        <div>
            <Header/>
            <PhotoContainer photoArr={state}/>
            <button onClick={get}>get</button>
            {/*{state.map(m => {*/}
            {/*    return <img src={m.src.large} alt="sss"/>*/}
            {/*})}*/}
        </div>
    );
}

export default App;
