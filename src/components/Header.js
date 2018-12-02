import React from "react";
export default function Header(props) {
    
    return (
        <header className="dash-header">
            <div className="nav-container">
                <div className="hamburger-btn"></div>
                <div className="logo-box"></div>
            </div>
            <div className="dash-heading-container">
                <h1>MY WILD FOODS</h1>
                <input className="search" placeholder="SEARCH" onChange={e => props.search(e.target.value)}></input>
            </div>
        </header>
    )

}