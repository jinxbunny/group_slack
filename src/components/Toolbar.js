import React from 'react';
import './Toolbar.css';
import Left from '../img/leftArrow_top_a.png'
import Right from '../img/rightArrow_top_a.png'
import History from '../img/history.png'
import Search from '../img/search.png'
import Help from '../img/help.png'


const Toolbar = () =>{
    return (
        <div id="Toolbar">
            <button id="prev"><img alt="" className="button" src={Left}/></button>
            <button id="next"><img alt="" className="button" src={Right}/></button>
            <button id="history"><img alt="" className="button" src={History}/></button>
            <button id="search"><img alt="" className="srch" src={Search}/>Search slack channel</button>
            <button id="help"><img alt="" className="button" src={Help}/></button>
        </div>
    )
}

export default Toolbar;