import express from "express";
import fetch from "node-fetch";
import API_KEY from "./sources/keys.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.post("/weather", async (req, res) => {
  const city = req.body.cityName;

  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    if (data.cod === 200) {
      res.json({
        weatherText: `${data.name} is ${data.main.temp} °C degrees`,
      });
    } else {
      res.status(400).json({
        weatherText: ` ${res.statusCode}: SIMPLY MEANS, THERE IS SOMETHING WRONG ABOUT THE CITY NAME!`,
      });
    }
  } catch (error) {
    res.send(error);
  }
});
export default app;
