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
      // name: "",
      // scientificName: "",
      // season: "",
      // imageUrl: "",
      // description: "",
      searchTerm: "",
      showModal: false,
      modalId: 0,
      showAddScreen: false
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

  handleInputChange(e) {
    this.setState({ [e.target.name] : e.target.value })
  }

  displayModal(id) {
    this.setState({ 
      showModal: true,
      modalId: id
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
        showAddScreen: false
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
    const { wildFoods, showModal, modalId, showAddScreen } = this.state;
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
        />
        <Modal 
          show={showModal}
          hide={this.hideModal}
          wildFoods={wildFoods}
          modalId={modalId}
        />
        <div className="wild-foods-container">{myWildFoods}</div>
      </div>
    );
  }
}

export default App;
