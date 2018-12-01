import React, { Component } from 'react';
import axios from "axios";
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
      input: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.postWildFoodToServer = this.postWildFoodToServer.bind(this);
    this.deleteWildFoodFromServer = this.deleteWildFoodFromServer.bind(this);
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

  postWildFoodToServer() {
    const newWildFood = {
      name: this.state.name,
      scientificName: this.state.scientificName,
      season: this.state.season,
      imageUrl: this.state.imageUrl,
      description: this.state.description
    }
    axios.post("/api/plants", newWildFood).then(response => {
      this.setState({
        wildFoods: response.data
      })
    })
  }

  // updateWildFood() {
  //   const updatedWildFood = {
  //     name: this.state.name, 
  //     scientificName: this.state.scientificName,
  //     season: this.state.season,
  //     imageUrl: this.state.imageUrl,
  //     description: this.state.description 
  //   }
  //   axios.put(`/api/plants/${id}`, updatedWildFood).then(response => {
  //     this.setState({
  //       wildFoods: response.data
  //     })
  //   })
  // }

  deleteWildFoodFromServer(id) {
    axios.delete(`/api/plants/${id}`).then(response => {
      this.setState({
        wildFoods: response.data
      })
    })
  }
  
  render() {
    const { wildFoods } = this.state;
    const myWildFoods = wildFoods.length ? (
      wildFoods.map(food => {
        let wildFoodDivStyle = {
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('${food.imageUrl}')`,
          backgroundSize: "cover",
          color: "white",
          position: "relative"
        }
        return (
          <div className="plant-pic" key={food.name} style={wildFoodDivStyle}>
            <h3>{food.name}</h3>
            <button 
              className="delete"
              onClick={() => this.deleteWildFoodFromServer(food.id)}>
              X
            </button>
            <div className="edit">
              <input name="name" placeholder="Name" onChange={this.handleInputChange}></input>
              <input name="season" placeholder="season" onChange={this.handleInputChange}></input>
              <input name="imageUrl" placeholder="ImageUrl" onChange={this.handleInputChange}></input>
              <input name="description" placeholder="Description" onChange={this.handleInputChange}></input>
              <button onClick={this.updateWildFood}>Update</button>
            </div>
          </div>
        )
      })
    ) : ( "Loading..." );

    return (
      <div className="App">
        <h1>MY WILD FOODS</h1>
        <input placeholder="search"></input>
        <div className="wild-foods-container">{myWildFoods}</div>
        <div className="add-plant-container">
          <input name="name" placeholder="Name" onChange={this.handleInputChange} />
          <input name="scientific-name" placeholder="Scientific name" onChange={this.handleInputChange} />
          <input name="season" placeholder="Season" onChange={this.handleInputChange} />
          <input name="imageUrl" placeholder="Image Url" onChange={this.handleInputChange} />
          <input name= "description" placeholder="Description" onChange={this.handleInputChange} />
          <button onClick={this.postWildFoodToServer}>Add New Wild Food</button>
        </div>
      </div>
    );
  }
}

export default App;
