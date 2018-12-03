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
        <div className="plant-image-wrapper">
          <div className="plant-pic" key={food.name} style={wildFoodDivStyle} onClick={() => displayModal(food.id)}>
            <h3>{food.name.toUpperCase()}</h3>
          </div>
          <a 
              className="delete"
              onClick={() => deleteWildFoodFromServer(food.id)}>
              X
          </a>
        </div>
          
        
      )
    })
    return myWildFoods;
}

{/* <div className="edit">
            <input name="name" placeholder="Name" onChange={handleInputChange}></input>
            <input name="season" placeholder="season" onChange={handleInputChange}></input>
            <input name="imageUrl" placeholder="ImageUrl" onChange={handleInputChange}></input>
            <input name="description" placeholder="Description" onChange={handleInputChange}></input>
            <button onClick={() => updateWildFood(food.id)}>Update</button>
          </div> */}