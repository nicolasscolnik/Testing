import { Pokemon } from "../Models/index.js";

class PokemonController {
  constructor() { }
  getAllPokemons = async (req, res) => {
    try {
      const pokemons = await Pokemon.findAll({ attributes: ["id", "name", "lastName", "mail"] });
      res.status(200).send({
        success: true,
        message: "Todos los roles que hay",
        data: pokemons,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getPokemonById = async (req, res) => {
    try {
      const { id } = req.params;
      const pokemon = await Pokemon.findOne({
        where: { id },
        attributes: ["id", "name", "lastName", "mail"],
      });

      if (!user) throw new Error("No hay user con ese id");

      res.status(200).send({
        success: true,
        message: "User con id: " + id,
        data: pokemon,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createPokemon = async (req, res) => {
    try {
      const { name, lastName, mail } = req.body;
      //  if (!name) throw new Error("El name no puede estar vacio");
      //  console.log(`🚀 ~ RoleController ~ createRole= ~ name:`, name);
      const pokemon = await Pokemon.create({ name, lastName, mail });
      if (!pokemon) throw new Error("El user no puede estar vacio");

      res
        .status(200)
        .send({ success: true, message: "User creado", data: pokemon });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updatePokemon = async (req, res) => {
    try {
      const { name, lastName, mail } = req.body;
      const { id } = req.params;
      const pokemon = await Pokemon.update(
        { name, lastName, mail },
        {
          where: { id },
        }
      );
      if (pokemon[0] === 0) throw new Error("no se modifico nada");
      res
        .status(200)
        .send({ success: true, message: "pokemon modificado", data: pokemon });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deletePokemon = async (req, res) => {
    try {
      const { name, lastName, mail } = req.body;
      const pokemon = await Pokemon.destroy({
        where: { name, lastName, mail }
      });
      res
        .status(200)
        .send({ success: true, message: "User " + pokemon + " borrado", data: pokemon });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}


export default PokemonController;
