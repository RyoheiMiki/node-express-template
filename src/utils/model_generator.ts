import { Sequelize, Op } from "sequelize";
import { HogeDB } from "../types/index";
console.log("hellooooooo");

export default class ModelGenerater {
  public sequelize: Sequelize;

  public constructor(dbConfig: any) {
    console.log("111111111111111");
    this.sequelize = new Sequelize(
      dbConfig.database,
      dbConfig.username,
      dbConfig.password,
      {
        host: dbConfig.host,
        dialect: "mysql",
        port: 3306,
        logging: true,
        omitNull: true,
      }
    );
    console.log(this.sequelize);
  }
}

export const hogeModelGenerate = (dbConfig: any) => {
  const modelGenerator = new ModelGenerater(dbConfig);

  return (setModel: any) => {
    const db: HogeDB = setModel(modelGenerator.sequelize);

    return {
      ...db,
      Sequelize,
      sequelize: modelGenerator.sequelize,
      Op,
    };
  };
};
