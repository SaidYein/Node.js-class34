import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("POST /", () => {
  it("if a proper city name is entered, the statusCode must be 200", async () => {
    const response = await request.post("/weather/london");
    expect(response.statusCode).toBe(200);
  });

  it("if a falsy city name is entered, the statusCode must be 400", async () => {
    const response = await request.post("/weather/xxxx");
    expect(response.statusCode).toBe(400);
  });

  it("if no city name is entered, the statusCode must be 404", async () => {
    const response = await request.post("/weather/");
    expect(response.statusCode).toBe(404);
  });

  it("Response should include a city name and it's current temperature", async () => {
    const response = await request.post("/weather/London");
    expect(response.body.weatherText).toContain("London" && ".");
  });
});
