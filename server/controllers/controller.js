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

    updateWildFood: (req, res) => {
        const { id } = req.params;
        const { name, scientificName, season, imageUrl, description } = req.body;
        const updatedFood = {
            name: name, 
            id: +id, 
            scientificName: scientificName,
            season: season, 
            imageUrl: imageUrl, 
            description: description
        }
        wildFoodsList.forEach((food, i, arr) => {
            if (food.id === +id) {
                arr[i] = updatedFood;
            }
        })
        res.status(200).send(wildFoodsList);
    },

    deleteWildFood: (req, res) => {
        const { id } = req.params;
        wildFoodsList = wildFoodsList.filter(food => {
            console.log(typeof food.id)
            return food.id !== +id;
        })
        res.status(200).send(wildFoodsList);
    },

    search: (req, res) => {
        const { search } = req.query;
        let filteredWildFoodsList = wildFoodsList.filter(food => {
            return food.name.toLowerCase().includes(search);
        })
        if (search) {
            res.status(200).send(filteredWildFoodsList);
        } else {
            res.status(200).send(wildFoodsList);
        }
    }




}