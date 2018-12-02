import React from "react";

export default function Modal(props) {
    const { show, hide, wildFoods, modalId } = props;
    const showHideClassName = show ? "modal display-flex" : "modal display-none";
    const foodToDisplayInModal = wildFoods.filter(food => food.id === modalId)[0];
    
    return foodToDisplayInModal ? (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button onClick={hide}>Close</button>
                <h2><strong>Name: </strong>{foodToDisplayInModal.name}</h2>
                <img src={foodToDisplayInModal.imageUrl} alt=""></img>
                <p><strong>Scientific-name: </strong> {foodToDisplayInModal.scientificName}</p>
                <p><strong>Season: </strong>{foodToDisplayInModal.season}</p>
                <p><strong>Description: </strong> {foodToDisplayInModal.description}</p>
            </section>
        </div>
    ) : null

}
    