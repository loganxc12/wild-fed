import React from "react";
import AddNewButton from "./AddNewButton";
export default function Header(props) {
    const {search, showAddScreen} = props;
    return (
        <header className="dash-header">
            <div className="nav-container">
                <div className="hamburger-btn"></div>
                <div className="logo-box"></div>
                <AddNewButton 
                    showAddScreen={showAddScreen}
                />
            </div>
            <div className="dash-heading-container">
                <h1>MY WILD FOODS</h1>
                <input className="search" placeholder="SEARCH" onChange={e => search(e.target.value)}></input>
            </div>
        </header>
    )
}