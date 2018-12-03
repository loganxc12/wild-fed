import React, { Component } from "react";
import axios from "axios";

class AddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            scientificName: "",
            season: "",
            imageUrl: "",
            description: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.postWildFoodToServer = this.postWildFoodToServer.bind(this);
    }

    handleInputChange(e) {
        this.setState({ [e.target.name] : e.target.value })
    }

    postWildFoodToServer() {
        const newWildFood = {
          name: this.state.name,
          scientificName: this.state.scientificName,
          season: this.state.season,
          imageUrl: this.state.imageUrl,
          description: this.state.description
        }
        this.props.postNewFood(newWildFood);
        this.setState({
            name: "",
            scientificName: "",
            season: "",
            imageUrl: "",
            description: ""
        })
    }

    render() {
        const { showAddScreen, hideAddScreen } = this.props;
        const { name, scientificName, season, imageUrl, description } = this.state;
        const showHideClassName = showAddScreen ? "add-screen display-flex" : "add-screen display-none";

        return (
            <div className={showHideClassName}>
                <a className="add-screen-close-btn" onClick={hideAddScreen}>X</a>
                <section className="add-screen-main">
                    <h1>ADD NEW WILD FOOD</h1>
                    <input className="add-input" value={name} name="name" placeholder="Name" onChange={this.handleInputChange} autoComplete="off"/>
                    <input className="add-input" value={scientificName} name="scientificName" placeholder="Scientific name" onChange={this.handleInputChange} autoComplete="off"/>
                    <input className="add-input" value={season} name="season" placeholder="Season" onChange={this.handleInputChange} autoComplete="off"/>
                    <input className="add-input" value={imageUrl} name="imageUrl" placeholder="Image Url" onChange={this.handleInputChange} autoComplete="off"/>
                    <input className="add-input" value={description} name= "description" placeholder="Description" onChange={this.handleInputChange} autoComplete="off"/>
                    <button onClick={this.postWildFoodToServer}>ADD TO LIST</button>
                </section>
            </div>
        )
    }
    
}

export default AddScreen;