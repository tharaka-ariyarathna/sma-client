import React from 'react' ;
import './searchSide.css'
import LogoSearch from '../logo search/LogoSearch';
import { useLocation } from 'react-router-dom';

const SearchSide = () => {
    const {location }= useLocation().state ;
    console.log(location) ;
    return(
        <div className='searchSide'>
            <LogoSearch />
            <div>dasdasd</div>
            <div>sadjakfjalfj</div>
        </div>
    )
}

export default SearchSide ;