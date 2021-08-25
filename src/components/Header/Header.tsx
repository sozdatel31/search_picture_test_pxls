import React, {ChangeEvent, useState} from 'react';
import style from './Header.module.css'
import {SearchInput} from "../SearchInput/SearchInput";

export function Header() {

    return (
        <div className={style.box}>
            <div className={style.headerContainer}>
                <a className={style.logoContainer} href="/">
                    <div className={style.logo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
                            <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                                  fill="#05A081"></path>
                            <path
                                d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
                                fill="#fff"></path>
                        </svg>
                    </div>
                    <div className={style.logoText}> Pexels</div>
                </a>
                <div className={style.headerInput}>
                    <SearchInput/>
                </div>
            </div>
            <div className={style.centerContainer}>
                <h1 className={style.centerContent}>The best free stock photos shared by talented
                    creators.</h1>

                <SearchInput/>
                <div className={style.tagsContainer}>
                    <ul className={style.tagsContent}>
                        <li className={style.tagsSuggested}>
                            Suggested<span>:</span></li>
                        <li>
                            <ul>
                                <li className={style.tag}>
                                    <a className="js-popular-search-tag" data-popular-search-value="training"
                                       data-track-action="popular-search" data-track-label="training"
                                       href="/search/training/">
                                        training
                                    </a>
                                </li>
                                <li className={style.tag}>
                                    <a className="js-popular-search-tag" data-popular-search-value="motivational quotes"
                                       data-track-action="popular-search" data-track-label="motivational quotes"
                                       href="/search/motivational%20quotes/">
                                        motivational quotes
                                    </a>
                                </li>
                                <li className={style.tag}>
                                    <a className="js-popular-search-tag" data-popular-search-value="beer"
                                       data-track-action="popular-search" data-track-label="beer" href="/search/beer/">
                                        beer
                                    </a>
                                </li>
                                <li className={style.tag}>
                                    <a className="js-popular-search-tag" data-popular-search-value="war"
                                       data-track-action="popular-search" data-track-label="war" href="/search/war/">
                                        war
                                    </a>
                                </li>
                                <li className={style.tag}>
                                    <a className="js-popular-search-tag" data-popular-search-value="city night"
                                       data-track-action="popular-search" data-track-label="city night"
                                       href="/search/city%20night/">
                                        city night
                                    </a>
                                </li>
                                <li className={style.tag}>
                                    <a className="js-popular-search-tag" data-popular-search-value="paint"
                                       data-track-action="popular-search" data-track-label="paint"
                                       href="/search/paint/">
                                        paint
                                    </a>
                                </li>
                                <li className={style.tag}>
                                    <a data-track-action="hero" data-track-label="more-popular-searches"
                                       href="/popular-searches/">
                                        more
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.footerItem}></div>
                <div className={style.footerPhotographer}>
                    <a data-photo-modal="2876511"
                       href="/photo/aerial-photo-of-empty-meandering-road-in-between-forest-2876511/"
                       data-photo-modal-initialized="true">
                        <span>Photo by Kelly Lacy</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

