export default {
  development: {
    host: process.env.HOGE_SERVICE_DB_HOST || "127.0.0.1",
    username: process.env.HOGE_SERVICE_DB_USER || "root",
    password: process.env.HOGE_SERVICE_DB_PASSWORD || "",
    database: process.env.HOGE_SERVICE_DB_DATABASE || "hoge",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
