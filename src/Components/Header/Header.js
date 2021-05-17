import React from 'react'
import imageLog from "../../assets/avatar-michelle.jpg"
import "./Header.css"

function Header(props) {
    return ( 
        <div className="header-container">
            <div className="header-humbuger-icon" onClick={props.toggelSideBar}>
                <img src={imageLog} width="30" height="30"/>
            </div>
            <div className="search-input">
                <input type="text" />
            </div>
            <div className="header-right-area">
            <img src={imageLog} width="30" height="30"/>
            </div>
        </div>
    )
}

export default Header
