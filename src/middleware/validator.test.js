'use strict';

const server = require('../server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Test for the JSON output being valid', () => {
  test('For a given name in the input string, the output object is correctly rendered', async () => {
    const response = await request.get('/person?name=kyle');
    expect(response.body).toEqual(
      {
        "name": "Kyle",
      },
    );
  });
});
