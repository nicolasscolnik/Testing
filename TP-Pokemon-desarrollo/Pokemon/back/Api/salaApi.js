// class xApi {
//   constructor() {
//     this.palabras = [];
//   }

//   create = async (palabra) => {
//     try {
//       // vallidar la palabra
//       this.palabras.push(palabra);
//       return await palabra;
//     } catch (error) {
//       return error;
//     }
//   };
//   getAll = async () => {
//     try {
//       // vallidar la palabra
//       const data = await this.palabras.join(" ");
//       return data;
//     } catch (error) {
//       return error;
//     }
//   };
// }

// export default xApi;
// ---------------------------------------------
class salaApi {
  constructor() {
  }
  create = async (palabra) => {
    try {
      // vallidar la palabra
      const data = await this.factory.xDao.createDao(palabra);
      return data;
    } catch (error) {
      return error;
    }
  };
  getAll = async () => {
    try {
      // vallidar la palabra
      const data = await this.factory.xDao.getAllDao();
      return data;
    } catch (error) {
      return error;
    }
  };
   getAmount = async (amount) => {
    try {
      // vallidar amount
      const data = await this.factory.xDao.getAmountDao(amount);
      return data;
    } catch (error) {
      return error;
    }
  };
}

export default salaApi;
