const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controllers/controller.js")
const app = express();
const PORT = 4000;
const data = require("./plants.json");

app.use(bodyParser.json());

app.get("/api/plants", controller.getWildFoods);

app.post("/api/plants", controller.addNewWildFood);

// app.put("/api/plants/:id", controller.updateWildFood);

app.delete("/api/plants/:id", controller.deleteWildFood);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));