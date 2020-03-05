const mongoose = require("mongoose");
const Recipe = require("./models/Recipe.model.js"); // Import of the model Recipe from './models/Recipe.model.js'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipe-app-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));
console.log(data);
// Recipe.create({ title: "nataliias rec" }).then(res => console.log(res));
Recipe.insertMany(data)
  .then(res => console.log(res)) //.then is response from database
  .catch(err => console.log(err));
Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 1000 })
  .then(res => console.log(res))
  .catch(err => console.log(err));
Recipe.deleteMany({ title: "Carrot Cake" })
  .then(res => console.log(res))
  .catch(err => console.log(err));
