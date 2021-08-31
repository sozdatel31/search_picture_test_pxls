import React from 'react';
import style from './Header.module.css'
import {SearchInput} from "../SearchInput/SearchInput";
import {HeaderTop} from "./HeaderTop";

export function Header() {

    return (
        <div className={style.box}>
            <HeaderTop active={true}/>
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

