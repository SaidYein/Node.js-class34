import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.post("/weather", (req, res) => {
  res.send(`City Name: ${req.body.cityName}`);
});

app.listen(3000);
