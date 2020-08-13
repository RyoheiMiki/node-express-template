import * as express from "express";
import db from "./models/index";

const app = express();
const PORT = 8000;

app.get("/", (req: any, res: any) => {
  const test = db.users.findAll({});
  console.log(test);
});
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
