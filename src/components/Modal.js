import React, {Component} from "react";

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleScientificName: true,
            toggleScientificNameInput: false,
            toggleSeason: true,
            toggleSeasonInput: false,
            toggleDescription: true, 
            toggleDescriptionInput: false,
            formName: true
        }
        this.toggle = this.toggle.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.toggle(e);
        }
    }

    toggle(e) {
        console.log(e.target.name);
        let toggleScientificNameState = this.state.toggleScientificName,
            toggleScientificNameInputState = this.state.toggleScientificNameInput,
            toggleSeasonState = this.state.toggleSeason,
            toggleSeasonInputState = this.state.toggleSeasonInput,
            toggleDescriptionState = this.state.toggleDescription,
            toggleDescriptionInputState = this.state.toggleDescriptionInput,
            formNameState = this.state.formName;
        const currentId = e.target.id;
        const currentName = e.target.name;
        if (currentId === "sciName" || currentName === "scientificName") {
            this.setState({
                toggleScientificName: !toggleScientificNameState,
                toggleScientificNameInput: !toggleScientificNameInputState
            })
        } else if (currentId === "season" || currentName === "season") {
            this.setState({
                toggleSeason: !toggleSeasonState,
                toggleSeasonInput: !toggleSeasonInputState
            })
        } else if (currentId === "description" || currentName === "description") {
            this.setState({
                toggleDescription: !toggleDescriptionState,
                toggleDescriptionInput: !toggleDescriptionInputState
            })
        }   
        
    }

    render() {
        const { toggleScientificName, toggleScientificNameInput, toggleSeason, toggleSeasonInput, toggleDescription, toggleDescriptionInput, formName } = this.state;
        const { show, hide, wildFoods, modalId } = this.props;
        const showHideClassName = show ? "modal display-flex" : "modal display-none";
        const foodToDisplayInModal = wildFoods.filter(food => food.id === modalId)[0];
        const showSciNameEditClassName = toggleScientificName ? "edit-sci-name display-flex" : "edit-sci-name display-none";
        const showSciNameInputClassName = toggleScientificNameInput ? "sci-name-input display-flex": "sci-name-input display-none"
        const showSeasonEditClassName = toggleSeason ? "edit-season display-flex" : "edit-season display-none";
        const showSeasonInputClassName = toggleSeasonInput ? "season-input display-flex": "season-input display-none"
        const showDescriptionClassName = toggleDescription ? "edit-description display-flex" : "edit-description display-none";
        const showDescriptionInputClassName = toggleDescriptionInput ? "description-input display-flex": "description-input display-none";
        const showformNameClassName = formName ? "formname display-flex" : "formname display-none";
        
        return foodToDisplayInModal ? (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <div className="modal-img">
                        <img src={foodToDisplayInModal.imageUrl} alt="wild food image" />
                    </div>
                    <div className="modal-content">
                        <a className="modal-close-btn" onClick={hide}>X</a>
                        <h2><strong>{foodToDisplayInModal.name.toUpperCase()}</strong></h2>
                        <div>
                           <strong>SCIENTIFIC NAME: </strong>  <span id="sciName" className={showSciNameEditClassName} onClick={this.toggle}>{foodToDisplayInModal.scientificName}</span>
                            <input className={showSciNameInputClassName} name="scientificName" placeholder={foodToDisplayInModal.scientificName} onKeyUp={this.handleKeyPress}></input>
                        </div>
                        <div>
                            <strong>SEASON: </strong><span id="season" className={showSeasonEditClassName} onClick={this.toggle}>{foodToDisplayInModal.season}</span>
                            <input className={showSeasonInputClassName} name="season" placeholder={foodToDisplayInModal.season} onKeyUp={this.handleKeyPress}></input>
                        </div>
                        <div>
                            <strong>DESCRIPTION: </strong> <span id="description" className={showDescriptionClassName} onClick={this.toggle}>{foodToDisplayInModal.description}</span>
                            <input className={showDescriptionInputClassName} name="description" placeholder={foodToDisplayInModal.description} onKeyUp={this.handleKeyPress}></input>
                        </div>
                    </div>
                </section>
            </div>
        ) : null
    }  
}

export default Modal;