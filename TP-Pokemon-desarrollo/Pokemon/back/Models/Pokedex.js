import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Pokedex extends Model { }

Pokedex.init(
    {
        idPoke1: {
            type: DT.INTEGER,
        },
        idPoke2: {
            type: DT.INTEGER,
        },
        idPoke3: {
            type: DT.INTEGER,
        },
        idPoke4: {
            type: DT.INTEGER,
        },
    },
    {
        sequelize: connection, // Asegúrate de que 'connection' sea una instancia válida de Sequelize
        modelName: "Pokedex",
    }
);

export default Pokedex;
