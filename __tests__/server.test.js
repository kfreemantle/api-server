'use strict';

const request = require("supertest");
const app = require("../src/server");

describe("API server", () => {
  it("returns 404 on a bad route", async () => {
    const response = await request(app).get("/nonexistent");
    expect(response.status).toBe(404);
  });

  it("returns 404 on a bad method", async () => {
    const response = await request(app).patch("/food");
    expect(response.status).toBe(404);
  });

  // Add more integration tests for each route to test status codes and returned data
});
