import React from "react";

export default function Modal(props) {
    const { show, hide, wildFoods, modalId } = props;
    const showHideClassName = show ? "modal display-flex" : "modal display-none";
    const foodToDisplayInModal = wildFoods.filter(food => food.id === modalId)[0];

    
    return foodToDisplayInModal ? (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-img">
                    <img src={foodToDisplayInModal.imageUrl} alt="wild food image" />
                </div>
                <div className="modal-content">
                    <a className="modal-close-btn" onClick={hide}>X</a>
                    <h2><strong>{foodToDisplayInModal.name.toUpperCase()}</strong></h2>
                    <p><strong>SCIENTIFIC NAME: </strong> {foodToDisplayInModal.scientificName}</p>
                    <p><strong>SEASON: </strong>{foodToDisplayInModal.season}</p>
                    <p><strong>DESCRIPTION: </strong> {foodToDisplayInModal.description}</p>
                </div>
            </section>
        </div>
    ) : null

}
    