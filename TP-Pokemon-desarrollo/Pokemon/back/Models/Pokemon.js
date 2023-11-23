import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Pokemon extends Model {}

Pokemon.init(
  {
    nombre: {
      type: DT.STRING(50),
      allowNull: false,
    },
    vida: {
      type: DT.DOUBLE ,
      allowNull: false,
    },
    poderAtaque: { //obejto
      type: DT.DOUBLE,
      allowNull: false,
    },
    poderCurar: { //objeto
      type: DT.DOUBLE,
      allowNull: false,
    },
    foto: {
      type: DT.STRING,
      allowNull: false,
    },
  },


  {
    sequelize: connection,
    modelName: "Pokemon",
    timestamps: false,
  }
);

export default Pokemon;
