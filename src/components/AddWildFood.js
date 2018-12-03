import React from "react";

export default function AddWildFood(props) {
    const { handleInputChange, postWildFoodToServer } = props;
    return (
        <div className="add-plant-container">
          <input name="name" placeholder="Name" onChange={handleInputChange} />
          <input name="scientific-name" placeholder="Scientific name" onChange={handleInputChange} />
          <input name="imageUrl" placeholder="Image Url" onChange={handleInputChange} />
          <input name= "description" placeholder="Description" onChange={handleInputChange} />
          <button onClick={postWildFoodToServer}>Add New Wild Food</button>
        </div>
    )
}