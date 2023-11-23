import Sala from "./Sala.js";
import User from "./User.js";
import Pokemon from "./Pokemon.js";
import Pokedex from "./Pokedex.js";
//One-To-Many
Sala.hasMany(User, {
     foreignKey: 'salaId',
});
User.belongsTo(Sala, {
     foreignKey:"salaId"
});

Pokedex.hasMany(Pokemon, {
     foreignKey: 'pokemonId',
});
Pokemon.belongsTo(Pokedex, {
     foreignKey:"pokemonId"
});

//One-To-One
User.hasOne(Pokedex, {
     foreignKey: 'pokedexId',
});
Pokedex.belongsTo(User, {
     foreignKey:"pokedexId"
});



export { Sala, User, Pokedex, Pokemon };