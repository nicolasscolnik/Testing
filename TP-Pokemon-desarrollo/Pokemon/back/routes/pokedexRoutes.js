import { Router } from "express";
import pokedexController from "../controller/pokedexController.js";
const pokedexRoutes = Router();
const pokedexController1 = new pokedexController();

pokedexRoutes.get("", pokedexController1.getAllPokedex);
pokedexRoutes.get("/:id", pokedexController1.getPokedexById);
pokedexRoutes.post("/", pokedexController1.createPokedex);
pokedexRoutes.put("/:id", pokedexController1.updatePokedex);
pokedexRoutes.delete("/", pokedexController1.deletePokedex);

export default pokedexRoutes;
