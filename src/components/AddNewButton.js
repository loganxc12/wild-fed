import React from "react";
import addButton from "../plus.png";
export default function AddNewButton(props) {
    const {showAddScreen} = props;
    return (
        <div className="add-btn" onClick={showAddScreen}>
            <img src={addButton}/>
            ADD TO LIST
        </div>
    )
}