import React from 'react';

function Header( { youtube,reactclass } ) {
    return (
        <header>
            <h1> Sarah Sehee 💛 React 2020 </h1>
            <a href={youtube}> {reactclass} </a>
        </header>
    );
}


export default Header 