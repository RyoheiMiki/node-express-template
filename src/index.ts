import * as express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

if (!module.parent) {
  app.listen(process.env.PORT || 8080, () => {
    console.log("Listening");
  });
}

export default app;
