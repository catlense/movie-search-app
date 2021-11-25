import React, {useState} from 'react';
import s from './index.module.css'
import {searchConstants} from "../../constants/searchConstants";
import {filmAPI} from "../../services/FilmService";

const IndexPage = () => {
    const [searchQuery, setSearchQuery] = useState<string> ( '' )
    const searchFilms = filmAPI.useFetchSearchFilmsQuery ( searchQuery )
    const onSearchHandler = () => {
        const {data, error, isLoading} = searchFilms
        console.log ( data, error, isLoading )
    }
    return (
        <div className={s.pageBackground}>
            <div className={s.indexTitle}>movie search</div>
            <div className={s.mainFunc}>
                <div className={s.funcTitle}> Добро Пожаловать</div>
                <div className={s.funcSubTitle}> Просто начните вводить...</div>
                <div>
                    <input
                        onKeyDown={( e ) => e.code == 'Enter' ? onSearchHandler () : ''}
                        onChange={( e ) => setSearchQuery ( e.target.value )} className={s.inputFunc}
                        placeholder={'Мы найдём фильм, сериал, или персону...'}/>
                </div>
                <div className={s.searchTypes}>
                    {searchConstants.map ( searchType => (
                        <div className={s.searchType} key={searchType}>{searchType}</div>
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
