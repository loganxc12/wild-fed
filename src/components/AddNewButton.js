import React from "react";
import addButton from "../plus.png";
export default function AddNewButton(props) {
    return (
        <div className="add-btn">
            <img src={addButton}/>
            ADD NEW
        </div>
    )
}