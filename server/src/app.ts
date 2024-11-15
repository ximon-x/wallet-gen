import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({
    name: "Simon",
    message: "Hello World",
  });
});

export default app;
