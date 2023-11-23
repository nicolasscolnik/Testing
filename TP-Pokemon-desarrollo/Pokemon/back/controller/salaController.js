import { Sala } from "../Models/index.js";
import { Sequelize, DataTypes, Op } from 'sequelize';

class SalaController {
  constructor() { }
  getAllSalas = async (req, res) => {
    try {
      const salas = await Sala.findAll({ attributes: ["id", "idUser1", "idUser2"] });
      res.status(200).send({
        success: true,
        message: "Todos las salas que hay",
        data: salas,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getSalaAvailable = async (req, res) => {
    try {
      const salaLibre = await Sala.findOne({ where: { idUser2: null } });
      if (salaLibre) {
        res.status(200).send(salaLibre);
      } else {
        res.status(200).send(null);
      }
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getSalaById = async (req, res) => {
    try {
      const { id } = req.params;
      const sala = await Sala.findOne({
        where: { id },
        attributes: ["id", "idUser1", "idUser2"],
      });

      if (!sala) throw new Error("No hay sala con ese id");

      res.status(200).send({
        success: true,
        message: "La sala",
        data: sala,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createSala = async (req, res) => {
    try {
      const { idUser1 } = req.body;
      const sala = await Sala.create({ idUser1 });
      if (!sala) throw new Error("La sala no puede estar vacio");

      res
        .status(200)
        .send({ success: true, message: "sala crerado", data: sala });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // updateSala = async (req, res) => {
  //   try {
  //     const { idUser2 } = req.params;
  //     const { id } = req.params;
  //     const sala = await Sala.update(
  //       { idUser2 },
  //       {
  //         where: { id },
  //       }
  //     );
  //     if (sala[0] === 0) throw new Error("no se modifico nada");
  //     res
  //       .status(200)
  //       .send({ success: true, message: "sala modificado", data: sala });
  //   } catch (error) {
  //     res.status(400).send({ success: false, message: error.message });
  //   }
  // };

  updateSala = async (req, res) => {
    try {
      const { idUser2 } = req.body;
      const { id } = req.params;

      // Utiliza un objeto con los valores que deseas actualizar
      const updatedValues = { idUser2 };

      // Utiliza el objeto con la condición en el segundo argumento
      const sala = await Sala.update(updatedValues, { where: { id } });

      if (sala[0] === 0) {
        throw new Error("No se modificó nada. idSala: " + id + " . nombre para iduser2: " + updatedValues);
      }

      res.status(200).send({
        success: true,
        message: "Sala modificada",
        data: sala,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteSala = async (req, res) => {
    try {
      const { id } = req.params;
      const sala = await Sala.destroy({
        where: { id }
      });
      res
        .status(200)
        .send({ success: true, message: "sala " + id + " borrado", data: sala });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default SalaController;
