import {useState, useEffect, useCallback, ChangeEvent, MouseEventHandler} from 'react';
import styles from './Modal.module.css';
import {useHistory, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../state/store";
import {InitialStateType} from "../../state/photoReducer";

const Modal = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const pictureSrc = useSelector<AppRootStateType, InitialStateType["photoObj"]>(state => state.photo.photoObj)
    const photo = useSelector((state: AppRootStateType) => state.photo.photo);
    const [list, setList] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset'
        };
    }, [])

    const hoverCallback = useCallback((e) => {
        if (e.target.className === styles.list) {
            setList(true);
        } else setList(false);
    }, [])


    // function setActiveLi({e, height, width} : any) {
    //     setActiveItem({active: true, id: e.target.id, height: height, width: width });
    // }

    function closeModal(e: any) {
        e.stopPropagation();
        history.goBack()
        ;
    }

    useEffect(() => {
        window.addEventListener('mouseover', hoverCallback);
        return window.addEventListener('mouseover', hoverCallback)
    }, [hoverCallback])


    return (
        <div className={styles.window}
             onClick={(e: any) => e.target.className === styles.window ? closeModal(e) : null}>
            <div className={styles.btnClose} onClick={(e) => closeModal(e)}><span></span></div>
            <div className={styles.content}>
                <section className={styles.header}>
                    <section className={styles.author}>
                        <a href={pictureSrc?.photographer_url} target='_blank' rel="noreferrer">
                            <span className={styles.authorPic} style={{background: `${pictureSrc?.avg_color}`}}></span>
                            <span className={styles.text}>
                                <p>{pictureSrc?.photographer}</p>
                            </span>
                        </a>
                        <img src={pictureSrc?.src.large} alt=""/>
                    </section>
                    <section className={styles.btns}>

                        <div className={styles.btnDownload}>
                            <span onClick={() =>{} }>"download"</span>
                            <span className={styles.list} onClick={() => setList(!list)}></span>
                        </div>
                        <div className={list ? `${styles.dropdown} ${styles.active}` : styles.dropdown}>
                            <div className={styles.dropdownContainer}>
                                <form>
                                    <h3>"choose"</h3>
                                    <ul>
                                        <li onClick={e => {setActiveLi(e, height, width)}} id='1' className={activeItem.active & (activeItem.id === '1' || activeItem.id === 'first') ? styles.activeItem : ''}>
                                            <label>
                                                <input type="radio" name="size" id="first" checked={activeItem.active & (activeItem.id === '1'  || activeItem.id === 'first')  ? true : false}/>
                                                <span className={styles.name}>"original"</span>
                                                <span> {width} x {height}</span>
                                            </label>
                                        </li>
                                        <li onClick={e => {setActiveLi(e, Math.floor((height/width)*1920), 1920)}} id='2' className={activeItem.active & (activeItem.id === '2' || activeItem.id === 'second') ? styles.activeItem : ''}>
                                            <label>
                                                <input type="radio" name="size" id="second" checked={activeItem.active & (activeItem.id === '2' || activeItem.id === 'second') ? true : false}/>
                                                <span className={styles.name}>"large"</span>
                                                <span> {1920} x {Math.floor((height/width)*1920)}</span>
                                            </label>
                                        </li>
                                        <li onClick={e => {setActiveLi(e, Math.floor((height/width)*1280), 1280)}} id='3' className={activeItem.active & (activeItem.id === '3' || activeItem.id === 'third') ? styles.activeItem : ''}>
                                            <label>
                                                <input type="radio" name="size" id="third" checked={activeItem.active & (activeItem.id === '3' || activeItem.id === 'third') ? true : false}/>
                                                <span className={styles.name}>"medium"</span>
                                                <span> {1280} x {Math.floor((height/width)*1280)} </span>
                                            </label>
                                        </li>
                                        <li onClick={e => {setActiveLi(e, Math.floor((height/width)*640), 640)}} id='4' className={activeItem.active & (activeItem.id === '4' || activeItem.id === 'fourth') ? styles.activeItem : ''}>
                                            <label>
                                                <input type="radio" name="size" id="fourth" checked={activeItem.active & (activeItem.id === '4' || activeItem.id === 'fourth') ? true : false}/>
                                                <span className={styles.name}>"small"</span>
                                                <span> {640} x {Math.floor((height/width)*640)}</span>
                                            </label>
                                        </li>
                                    </ul>
                                    <span className={styles.dropdownBtn} ><button  onClick={(e) => {e.preventDefault(); dispatch(downloadPhotoCreator(src.original, photographer, id, activeItem.width, activeItem.height))}}>{translate("download", language)}</button></span>

                                </form>
                            </div>
                        </div>
                    </section>
                </section>
                <section className={styles.image}>
                    <div className={styles.imageContainer}>
                        <img
                            style={transform ? {transform : transform} : {}} className={zoom ? `${styles.zoomImg} ${styles.mainImg}` : styles.mainImg} src={src.original} alt={url.substring(29, url.lastIndexOf('-'))}
                            srcSet={`${src.original}?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 500w, ${src.original}?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 1000w`}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Modal;