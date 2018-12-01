let id = 3;
let wildFoodsList = require("../plants.json");

module.exports = {

    getWildFoods: (req, res) => {
        res.status(200).send(wildFoodsList);
    },
    
    addNewWildFood: (req, res) => {
        const { name, scientificName, season, imageUrl, description } = req.body;
        const newWildFood = {
            name: name, 
            id: id, 
            scientificName: scientificName,
            season: season, 
            imageUrl: imageUrl, 
            description: description
        }
        wildFoodsList.push(newWildFood);
        id++;
        res.status(201).send(wildFoodsList);
    },

    // updateWildFood: (req, res) => {
    //     const { id } = req.params;
    //     const { name, scientificName, season, imageUrl, description } = req.body;
    //     const updatedFood = {
    //         name: name,

    //     }
    //     wildFoodsList.forEach(food => {
    //         if (food.id === id) {
    //             food = 
    //         }
    //     })
    // },

    deleteWildFood: (req, res) => {
        const { id } = req.params;
        console.log(id);
        wildFoodsList = wildFoodsList.filter(food => {
            return food.id !== +id;
        })
        res.status(200).send(wildFoodsList);
    }

}