import React from "react";

export default function WildFoodsList(props) {
    const { wildFoods, handleInputChange, deleteWildFoodFromServer, updateWildFood, displayModal } = props;
    const myWildFoods = wildFoods.map(food => {
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
            onClick={() => deleteWildFoodFromServer(food.id)}>
            X
          </button>
          <button onClick={() => displayModal(food.id)}>SEE MORE</button>
          {/* <div className="edit">
            <input name="name" placeholder="Name" onChange={handleInputChange}></input>
            <input name="season" placeholder="season" onChange={handleInputChange}></input>
            <input name="imageUrl" placeholder="ImageUrl" onChange={handleInputChange}></input>
            <input name="description" placeholder="Description" onChange={handleInputChange}></input>
            <button onClick={() => updateWildFood(food.id)}>Update</button>
          </div> */}
        </div>
      )
    })
    return myWildFoods;
}