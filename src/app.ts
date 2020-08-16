import * as express from "express";
// import loaders from "./loaders";

async function startServer() {
  const app = express();

  await (await import("./loaders")).default({ expressApp: app });
  // await require("./loaders").default({ expressApp: app });

  app.listen(process.env.PORT, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready !`);
  });
}

startServer();

// import * as express from "express";
// import db from "./models/index";

// const app = express();
// const PORT = 8000;

// process.on("unhandledRejection", (reason, p) => {
//   throw reason;
// });

// app.get("/", async (req: any, res: any) => {
//   let a;
//   const response = await db.users.findAll().then((res) => {
//     a = res;
//     console.log(JSON.stringify(res));
//   });
//   return res.status(200).json({
//     a,
//   });
// });
// app.listen(PORT, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
// });
