import { Router } from "express";
import usersRoutes from "./usersRoutes.js";
import salasRoutes from "./salasRoutes.js";
import pokemonsRoutes from "./pokemonsRoutes.js";
import pokedexRoutes from "./pokedexRoutes.js";

const router = Router()

router.use("/salas", salasRoutes)
router.use("/users", usersRoutes)
router.use("/pokemons", pokemonsRoutes)
router.use("/pokedex", pokedexRoutes)

export default router