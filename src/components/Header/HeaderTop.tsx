import React, {useState} from 'react';
import style from './Header.module.css'
import {SearchInput} from "../SearchInput/SearchInput";

type HeaderTopPropsType = {
    active?: boolean
}

export function HeaderTop(props: HeaderTopPropsType) {

    const [nav, setNav] = useState<boolean>(false)
    const sss = !nav && props.active

    function setBgNavBar() {
        if (window.scrollY >= 90) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', setBgNavBar);

    return (
        <div className={sss ? `${style.headerContainer} ` : `${style.headerContainer} ${style.headerContainerActive}`}>
            <a className={style.logoContainer} href="/">
                <div className={style.logo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
                        <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                              fill="#05A081"></path>
                        <path
                            d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124
                                5.124 0 0 1 .833 10.18V23z"
                            fill="#fff"></path>
                    </svg>
                </div>
                <div className={style.logoText}> Pexels</div>
            </a>
            <div className={style.headerInput}>
                <SearchInput visible={sss}/>
            </div>
        </div>
    );
}

