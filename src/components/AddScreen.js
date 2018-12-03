import React from "react";

export default function AddScreen(props) {
    const { showAddScreen, handleInputChange, postWildFoodToServer } = props;
    const showHideClassName = showAddScreen ? "add-screen display-flex" : "add-screen display-none";

    return (
        <div className={showHideClassName}>
            <section className="add-screen-main">
                <a className="modal-close-btn"></a>
                <h1>ADD NEW WILD FOOD</h1>
                <input className="add-input" name="name" placeholder="Name" onChange={handleInputChange} />
                <input className="add-input" name="scientific-name" placeholder="Scientific name" onChange={handleInputChange} />
                <input className="add-input" name="imageUrl" placeholder="Image Url" onChange={handleInputChange} />
                <input className="add-input" name= "description" placeholder="Description" onChange={handleInputChange} />
                <button onClick={postWildFoodToServer}>ADD</button>
            </section>
        </div>
    )
}