const {MongoClient} = require('mongodb');
const service = require('../services/currencyService')
const mongoose = require("mongoose");
const request = require("supertest");
const app = require('../server')
require("dotenv").config();
jest.mock('mongodb')


afterEach(() => {
  jest.restoreAllMocks();
});

describe("GET", () => {
  it("should return all currency", async () => {
    const client = { db: jest.fn().mockReturnThis(), collection: jest.fn() };
    const connectSpy = jest.spyOn(mongoose, 'connect').mockResolvedValueOnce(client);
  });
});