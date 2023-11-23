import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model {}

User.init(
  {
    nombre: {
      type: DT.STRING(50),
      allowNull: false,
    },
    tuTurno: {
      type: DT.BOOLEAN ,
      allowNull: false,
    },
    pokemons: { //obejto
      type: DT.STRING(50),
      allowNull: false,
    },
    pokemonEnArena: { //objeto
      type: DT.STRING(50),
      allowNull: false,
    },
    numeroJugador: {
      type: DT.INTEGER,
      allowNull: false,
    },
  },

  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

export default User;
