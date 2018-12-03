import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' 

class WildFoodsList extends Component {
    constructor(props) {
      super(props);

      this.state = {
        confirmDelete: false
      }

      this.submit = this.submit.bind(this);
    }

    submit(id) {
      confirmAlert({
        title: 'Confirm',
        message: 'Are you sure you want to delete this wild food?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.props.deleteWildFoodFromServer(id)
          },
          {
            label: 'No',
            onClick: () => console.log("clicked no")
          }
        ]
      })
    }

    render() {
      const { wildFoods, handleInputChange, deleteWildFoodFromServer, updateWildFood, displayModal } = this.props;
      const myWildFoods = wildFoods.map(food => {
      let wildFoodDivStyle = {
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('${food.imageUrl}')`,
        backgroundSize: "cover",
        color: "white",
        position: "relative"
      }
      
      return (
        <div className="plant-image-wrapper">
          <div className="plant-pic" key={food.name} style={wildFoodDivStyle} onClick={() => displayModal(food.id)}>
            <h3>{food.name.toUpperCase()}</h3>
          </div>
          <a 
              className="delete"
              onClick={() => this.submit(food.id)}
          > X
          </a>
        </div>
      )
    })
      return myWildFoods;
    }

}

export default WildFoodsList;

{/* <div className="edit">
            <input name="name" placeholder="Name" onChange={handleInputChange}></input>
            <input name="season" placeholder="season" onChange={handleInputChange}></input>
            <input name="imageUrl" placeholder="ImageUrl" onChange={handleInputChange}></input>
            <input name="description" placeholder="Description" onChange={handleInputChange}></input>
            <button onClick={() => updateWildFood(food.id)}>Update</button>
          </div> */}