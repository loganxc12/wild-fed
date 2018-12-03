import React, { Component } from 'react';
import axios from "axios";
import WildFoodsList from "./components/WildFoodsList";
import AddScreen from "./components/AddScreen";
import AddWildFood from "./components/AddWildFood";
import Modal from "./components/Modal";
import Header from "./components/Header";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wildFoods: [],
      name: "",
      scientificName: "",
      season: "",
      imageUrl: "",
      description: "",
      searchTerm: "",
      showModal: false,
      modalId: 0,
      showAddScreen: false, 
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showAddScreen = this.showAddScreen.bind(this);
    this.hideAddScreen = this.hideAddScreen.bind(this);
    this.postWildFoodToServer = this.postWildFoodToServer.bind(this);
    this.deleteWildFoodFromServer = this.deleteWildFoodFromServer.bind(this);
    this.updateWildFood = this.updateWildFood.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios.get("/api/plants").then(response => {
      this.setState({
        wildFoods: response.data
      })
    })
  }

  handleInputChange(e, id) {
    console.log(e.target.id);
    this.setState({ 
      [e.target.name] : e.target.value     
    })
  }

  displayModal(food) {
    this.setState({ 
      showModal: true,
      modalId: food.id,
      name: food.name,
      scientificName: food.scientificName,
      season: food.season,
      imageUrl: food.imageUrl,
      description: food.description
    });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  showAddScreen() {
    this.setState({
      showAddScreen: true
    })
  }

  hideAddScreen() {
    this.setState({
      showAddScreen: false
    })
  }

  postWildFoodToServer(newWildFood) {
    axios.post("/api/plants", newWildFood).then(response => {
      this.setState({
        wildFoods: response.data,
        showAddScreen: false,
        name: "",
        scientificName: "",
        season: "",
        imageUrl: "",
        description: ""
      })
    })
  }

    updateWildFood(id) {
    const updatedWildFood = {
      name: this.state.name, 
      scientificName: this.state.scientificName,
      season: this.state.season,
      imageUrl: this.state.imageUrl,
      description: this.state.description 
    }
    console.log(updatedWildFood);
    axios.put(`/api/plants/${id}`, updatedWildFood).then(response => {
      this.setState({
        wildFoods: response.data
      })
    })
  }

  deleteWildFoodFromServer(id) {
    axios.delete(`/api/plants/${id}`).then(response => {
      this.setState({
        wildFoods: response.data
      })
    })
  }

  search(val) {
    axios.get(`/api/search?search=${val}`).then(response => {
      this.setState({
        wildFoods: response.data,
        searchTerm: ""
      })
    })
  }
  
  render() {
    console.log(this.state);
    const { wildFoods, showModal, modalId, showAddScreen, name, scientificName, season, description, imageUrl } = this.state;
    const myWildFoods = wildFoods.length ? (
      <WildFoodsList 
        wildFoods={wildFoods} 
        handleInputChange={this.handleInputChange} 
        deleteWildFoodFromServer={this.deleteWildFoodFromServer}
        updateWildFood={this.updateWildFood}
        displayModal={this.displayModal}
      />
    ) : ( "Loading..." );


    return (
      <div className="App">
        <Header 
          search={this.search}
          showAddScreen={this.showAddScreen}
        />
        <AddScreen 
          showAddScreen={showAddScreen}
          hideAddScreen={this.hideAddScreen}
          postNewFood={this.postWildFoodToServer}
          handleInputChange={this.handleInputChange}
          name={name}
          scientificName={scientificName}
          season={season}
          description={description}
          imageUrl={imageUrl}
        />
        <Modal 
          show={showModal}
          hide={this.hideModal}
          update={this.updateWildFood}
          wildFoods={wildFoods}
          modalId={modalId}
          handleInputChange={this.handleInputChange}
        />
        <div className="wild-foods-container">{myWildFoods}</div>
      </div>
    );
  }
}

export default App;
