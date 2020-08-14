import { Sequelize } from "sequelize";
import { hogeModelGenerate } from "../utils/model_generator";
import dbConfig from "../../config/db/config";
import schema from "./schema";

const setModel = (sequelize: Sequelize) => {
  const db: any = {};

  Object.keys(schema).forEach((tableName) => {
    db[tableName] = schema[tableName].factory(sequelize);
  });

  // associationを貼るのは各Modelのinit()が全て終わってから
  // (全モデルのinit()が終わる前にassociationを貼るとそんなモデル知らないみたいなエラーで死ぬ）
  Object.keys(schema).forEach((tableName) => {
    if ("associate" in db[tableName]) {
      db[tableName].associate(db);
    }
  });

  return db;
};

const modelGenerator = hogeModelGenerate(dbConfig.development);
const db = modelGenerator(setModel);

export default db;
