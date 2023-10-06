import React from 'react';

import "../../css/Header/Header.css";

import { wordes } from '../../words';

function Header(){
    return (
        <header>
            {wordes.headerTitle}
        </header>
    )
}

export default Header 