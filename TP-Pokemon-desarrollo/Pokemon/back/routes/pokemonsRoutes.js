import { Router } from "express";
import PokemonController from "../controller/pokemonController.js";
const pokemonRoutes = Router();
const pokemonController = new PokemonController();

pokemonRoutes.get("", pokemonController.getAllPokemons);
pokemonRoutes.get("/:id", pokemonController.getPokemonById);
pokemonRoutes.post("/", pokemonController.createPokemon);
pokemonRoutes.put("/:id", pokemonController.updatePokemon);
pokemonRoutes.delete("/", pokemonController.deletePokemon);

export default pokemonRoutes;
