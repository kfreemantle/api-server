'use strict';

const logger = require("./logger");

describe("Logger middleware", () => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

  afterEach(() => {
    consoleLogSpy.mockClear();
  });

  it("logs the request method and URL", () => {
    const req = {
      method: "GET",
      url: "/test",
    };
    const res = {};
    const next = jest.fn();

    logger(req, res, next);

    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy.mock.calls[0][0]).toContain("GET");
    expect(consoleLogSpy.mock.calls[0][0]).toContain("/test");
    expect(next).toHaveBeenCalled();
  });
});
